import { GraphQLObjectType } from 'graphql';

import ApplicationFields from './fields';

const ApplicationType = new GraphQLObjectType({
  name: 'ApplicationType',
  description: 'Application Type',
  fields: ApplicationFields,
});

export default ApplicationType;
