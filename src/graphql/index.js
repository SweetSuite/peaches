import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { User } from '../models';
import { sequelize } from '../db';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

sequelize.sync({ force: true })

const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  descripton: 'Root Query',
  fields: {
    test: {
      type: GraphQLString,
      resolve() {
        return 'Test'
      }
    }
  },
});

const RootMutationType = new GraphQLObjectType({
  name: 'RootMutation',
  descripton: 'Root Mutation',
  fields: {
    signup: {
      type: GraphQLString,
      args: {
        email: {
          type: new GraphQLNonNull(GraphQLString)
        },
        password: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(rootValue, input) {
        return new Promise((res, rej) => {
          User.findOne({
            where: { email: input.email }
          })
            .then(user => {
              if (user) {
                rej(`User with email ${input.email} already exists`)
              } else {
                //send verification email
                const expiration_date = new Date().getTime() + 43200000;
                const verifyToken = jwt.sign({ email: input.email, exp: expiration_date }, 'test');
                const hash = bcrypt.hashSync(input.password, 10);
                User.create({ email: input.email, password: hash, verified: false })
                  .then(() => res('Created User ' + verifyToken))
                  .catch(err => rej(err))
              }
            })
            .catch(err => rej(err))
        })
      }
    },
    verify: {
      type: GraphQLString,
      args: {
        token: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(rootValue, input) {
        return new Promise((res, rej) => {
          var decoded = jwt.verify(input.token, 'test');
          const now = new Date().getTime();
          if (now > decoded.exp) {
            rej('Verification token expired')
          } else {
            User.update(
              { verified: true },
              { where: { email: decoded.email } }
            )
              .then(() => res('Token verified'))
              .catch((err) => rej(err))
          }
        })
      }
    },
    login: {
      type: GraphQLString,
      args: {
        email: {
          type: new GraphQLNonNull(GraphQLString)
        },
        password: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(rootValue, input) {
        return new Promise((res, rej) => {
          User.findOne({
            where: { email: input.email }
          })
            .then((user) => {
              if (!user.verified) {
                return rej('Your account is not verified')
              }
              if (bcrypt.compareSync(input.password, user.password)) {
                const accessToken = jwt.sign({ username: input.username }, 'test');
                res(accessToken);
              } else {
                rej('Incorrect Username or Password')
              }
            })
            .catch(err => rej('Account doesnt exist, please create an account'))
        })
      }
    }
  }
})

const schema = new GraphQLSchema({ query: RootQueryType, mutation: RootMutationType });

export default schema;
