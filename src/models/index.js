import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import user from './user/fields';

const RootSchema = new GraphQLObjectType({
  name: 'RootQuery',
  descripton: 'RootQuery description',
  fields: {
    user,
  },
});

const schema = new GraphQLSchema({ query: RootSchema });

export default schema;
