require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fields__ = __webpack_require__(11);




const ApplicationType = new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'ApplicationType',
  description: 'Application Type',
  fields: __WEBPACK_IMPORTED_MODULE_1__fields__["a" /* default */]
});

/* harmony default export */ __webpack_exports__["a"] = (ApplicationType);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dotenv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express_graphql__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__graphql__ = __webpack_require__(7);






__WEBPACK_IMPORTED_MODULE_0_dotenv___default.a.config();
const { PORT } = process.env;

const app = __WEBPACK_IMPORTED_MODULE_1_express___default()();

app.use('/', __WEBPACK_IMPORTED_MODULE_2_express_graphql___default()({
  schema: __WEBPACK_IMPORTED_MODULE_3__graphql__["a" /* default */],
  graphiql: true
}));

app.listen(PORT, () => console.log(`> Listening on port ${PORT}`));

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("express-graphql");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(8);




const RootSchema = new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'RootQuery',
  descripton: 'Root Query',
  fields: {
    user: {
      type: __WEBPACK_IMPORTED_MODULE_1__types__["b" /* UserType */],
      resolve: () => console.log('User Queried')
    },
    application: {
      type: __WEBPACK_IMPORTED_MODULE_1__types__["a" /* ApplicationType */],
      resolve: () => console.log('Application Queried')
    }
  }
});

const schema = new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLSchema"]({ query: RootSchema });

/* harmony default export */ __webpack_exports__["a"] = (schema);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_type__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__application_type__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__user_type__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__application_type__["a"]; });





/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fields__ = __webpack_require__(10);




const UserType = new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'UserType',
  description: 'User Type',
  fields: __WEBPACK_IMPORTED_MODULE_1__fields__["a" /* default */]
});

/* harmony default export */ __webpack_exports__["a"] = (UserType);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__application_type__ = __webpack_require__(1);




const UserFields = {
  email: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]),
    resolve: user => user.email
  },
  password: {
    type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"],
    resolve: user => user.password
  },
  application: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_1__application_type__["a" /* default */]),
    resolve: user => user.application
  }
};

/* harmony default export */ __webpack_exports__["a"] = (UserFields);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums__ = __webpack_require__(12);




const ApplicationFields = {
  firstName: {
    type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"],
    resolve: application => application.firstName
  },
  lastName: {
    type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"],
    resolve: application => application.lastName
  },
  levelOfStudy: {
    type: __WEBPACK_IMPORTED_MODULE_1__enums__["b" /* LevelOfStudyEnumType */],
    resolve: application => application.levelOfStudy
  },
  major: {
    type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"],
    resolve: application => application.major
  },
  shirtSize: {
    type: __WEBPACK_IMPORTED_MODULE_1__enums__["c" /* ShirtSizeEnumType */],
    resolve: application => application.shirtSize
  },
  gender: {
    type: __WEBPACK_IMPORTED_MODULE_1__enums__["a" /* GenderEnumType */],
    resolve: application => application.gender
  }
};

/* harmony default export */ __webpack_exports__["a"] = (ApplicationFields);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__size__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gender__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__level__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__size__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__gender__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__level__["a"]; });






/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);


const ShirtSizeEnumType = new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLEnumType"]({
  name: 'ShirtSizeEnum',
  values: {
    xSmall: {
      value: 0
    },
    small: {
      value: 1
    },
    medium: {
      value: 2
    },
    large: {
      value: 3
    },
    xLarge: {
      value: 4
    },
    xxLarge: {
      value: 5
    }
  }
});

/* harmony default export */ __webpack_exports__["a"] = (ShirtSizeEnumType);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);


const GenderEnumType = new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLEnumType"]({
  name: 'GenderEnum',
  values: {
    male: {
      value: 0
    },
    female: {
      value: 1
    },
    other: {
      value: 2
    },
    noResponse: {
      value: 3
    }
  }
});

/* harmony default export */ __webpack_exports__["a"] = (GenderEnumType);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);


const LevelOfStudyEnumType = new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLEnumType"]({
  name: 'LevelOfStudyEnum',
  values: {
    freshman: {
      value: 0
    },
    sophomore: {
      value: 1
    },
    junior: {
      value: 2
    },
    senior: {
      value: 3
    },
    seniorPlus: {
      value: 4
    }
  }
});

/* harmony default export */ __webpack_exports__["a"] = (LevelOfStudyEnumType);

/***/ })
/******/ ]);
//# sourceMappingURL=main.map