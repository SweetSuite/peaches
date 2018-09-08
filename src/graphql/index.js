import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { UserType, ApplicationType } from './types';

const RootSchema = new GraphQLObjectType({
  name: 'RootQuery',
  descripton: 'Root Query',
  fields: {
    user: {
      type: UserType,
      resolve: () => console.log('User Queried'),
    },
    application: {
      type: ApplicationType,
      resolve: () => console.log('Application Queried'),
    },
  },
});

const schema = new GraphQLSchema({ query: RootSchema });

export default schema;
