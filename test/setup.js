// TODO figure out how to use ES6 import from CommonJS's require
// Probably has to do with transform in package.json/jest
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();