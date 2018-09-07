import { ShirtSizeEnumType, GenderEnumType } from '../enums';

const ApplicationFields = {
  firstName: {
    type: GraphQLString,
    resolve: application => application.firstName,
  },
  lastName: {
    type: GraphQLString,
    resolve: application => application.lastName,
  },
  levelOfStudy: {
    type: LevelOfStudyEnum,
    resolve: application => application.levelOfStudy,
  },
  major: {
    type: GraphQLString,
    resolve: application => application.major,
  },
  shirtSize: {
    type: ShirtSizeEnumType,
    resolve: application => application.shirtSize,
  },
  gender: {
    type: GenderEnumType,
    resolve: application => application.gender,
  },
};
