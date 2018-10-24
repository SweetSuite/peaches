import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { init_sequlize, User, Application } from '../models';
import ApplicationType from '../graphql/types/application/type';
import { verifyUserToken } from '../util/auth';

init_sequlize(true);

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
        return User.findOne({
          where: { email: input.email }
        })
          .then(user => {
            if (user) {
              throw new Error(`User with email ${input.email} already exists`)
            } else {
              //send verification email
              const expiration_date = new Date().getTime() + 43200000;
              const verifyToken = jwt.sign({ email: input.email, exp: expiration_date }, 'test');
              const hash = bcrypt.hashSync(input.password, 10);
              console.log('@@@TOKEN@@@: ', verifyToken);
              return User.create({ email: input.email, password: hash, verified: false, application: {} },
                {
                  include: [Application]
                })
            }
          })
          .then(() => { return 'Created User' })
          .catch(err => { throw err })
      }
    },
    verify: {
      type: GraphQLString,
      args: {
        token: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(rootValue, input) {
        var decoded = jwt.verify(input.token, 'test');
        const now = new Date().getTime();
        if (now > decoded.exp) {
          throw new Error('Verification token expired')
        } else {
          return User.update(
            { verified: true },
            { where: { email: decoded.email } }
          )
            .then(() => {
              return 'Account verified';
            })
            .catch(err => { throw err })
        }
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
        return User.findOne({
          where: { email: input.email }
        })
          .then((user) => {
            if (!user.verified) {
              throw new Error('Your account is not verified')
            }
            if (bcrypt.compareSync(input.password, user.password)) {
              const accessToken = jwt.sign({ username: input.username }, 'test');
              return accessToken;
            } else {
              throw new Error('Incorrect Username or Password')
            }
          })
          .catch(err => { throw err })
      }
    },
    editApplication: {
      type: ApplicationType,
      args: {
        first_name: {
          type: new GraphQLNonNull(GraphQLString)
        },
        last_name: {
          type: new GraphQLNonNull(GraphQLString)
        },
        levelOfStudy: {
          type: new GraphQLNonNull(GraphQLString)
        },
        major: {
          type: new GraphQLNonNull(GraphQLString)
        },
        shirtSize: {
          type: new GraphQLNonNull(GraphQLString)
        },
        gender: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(rootValue, input, context) {
        //var token = verifyUserToken(context);
        return User.findOne({
          where: { email: token.email }
        })
          .then(user => {
            return Application.findOne({
              where: { id: user.application_id }
            })
          })
          .then(application => {
            application.update({
              first_name: input.first_name,
              last_name: input.last_name,
              major: input.major,
              shirtSize: input.shirtSize,
              gender: input.shirtSize
            })
          })
      }
    }
  }
})

const schema = new GraphQLSchema({ query: RootQueryType, mutation: RootMutationType });

export default schema;
