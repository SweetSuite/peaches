import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

const UserType = new GraphQLObjectType({
  name: 'UserType',
  description: 'UserType description',
  fields: {
    email: { type: new GraphQLNonNull(GraphQLString) },
  },
});

export default UserType;
