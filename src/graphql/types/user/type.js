import { GraphQLObjectType } from 'graphql';

import UserFields from './fields';

const UserType = new GraphQLObjectType({
  name: 'UserType',
  description: 'User Type',
  fields: UserFields,
});

export default UserType;
