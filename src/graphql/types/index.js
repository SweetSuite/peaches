import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import UserType from './user/type';
import ApplicationType from './application/type';

const RootSchema = new GraphQLObjectType({
  name: 'RootQuery',
  descripton: 'Root Query',
  fields: {
    UserType,
    ApplicationType,
  },
});

const schema = new GraphQLSchema({ query: RootSchema });

export default schema;
