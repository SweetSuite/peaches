import { GraphQLEnumType } from 'graphql';

const LevelOfStudyEnumType = new GraphQLEnumType({
  name: 'LevelOfStudyEnum',
  values: {
    freshman: {
      value: 0,
    },
    sophomore: {
      value: 1,
    },
    junior: {
      value: 2,
    },
    senior: {
      value: 3,
    },
    seniorPlus: {
      value: 4,
    },
  },
});

export default LevelOfStudyEnumType;
