import { GraphQLObjectType } from 'graphql';

const ApplicationType = new GraphQLObjectType({
  name: 'ApplicationType',
  description: 'Application Type',
  fields: {
    ApplicationFields,
  },
});
