import { GraphQLEnumType } from 'graphql';

const ShirtSizeEnumType = new GraphQLEnumType({
  name: 'ShirtSizeEnum',
  values: {
    xSmall: {
      value: 0,
    },
    small: {
      value: 1,
    },
    medium: {
      value: 2,
    },
    large: {
      value: 3,
    },
    xLarge: {
      value: 4,
    },
    xxLarge: {
      value: 5,
    },
  },
});

export default ShirtSizeEnumType;
