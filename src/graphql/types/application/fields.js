import { GraphQLString } from 'graphql';

import {
  ShirtSizeEnumType,
  GenderEnumType,
  LevelOfStudyEnumType,
} from '../enums';

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
    type: LevelOfStudyEnumType,
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

export default ApplicationFields;
