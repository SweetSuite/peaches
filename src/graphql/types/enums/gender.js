import { GraphQLEnumType } from 'graphql';

const GenderEnumType = new GraphQLEnumType({
  name: 'GenderEnum',
  values: {
    male: {
      value: 0,
    },
    female: {
      value: 1,
    },
    other: {
      value: 2,
    },
    noResponse: {
      value: 3,
    },
  },
});

export default GenderEnumType;
