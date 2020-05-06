// TODO figure out how to use ES6 import from CommonJS's require
// Probably has to do with transform in package.json/jest
require('@babel/polyfill'); //Fixes the "ReferenceError: regeneratorRuntime is not defined issue"

const dotenv = require('dotenv');
dotenv.config();