import { GraphQLNonNull, GraphQLString } from 'graphql';

import ApplicationType from '../application/type';

const UserFields = {
  email: {
    type: new GraphQLNonNull(GraphQLString),
    resolve: user => user.email,
  },
  password: {
    type: GraphQLString,
    resolve: user => user.password,
  },
  application: {
    type: new GraphQLNonNull(ApplicationType),
    resolve: user => user.application,
  },
  verified: {
    type: new GraphQLNonNull(GraphQLBoolean),
    resolve: user => user.verified
  }
};

export default UserFields;
