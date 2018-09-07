import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { UserType, ApplicationType } from './types';

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
