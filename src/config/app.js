/**
 * Extracting app out for testing purposes
 */
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
/**
 *  Body Parse is a middleware for http requests
 *  extract the entire body portion of an incoming request stream and exposes it on req.body
 *  The 'body-parser' middleware only handles JSON and urlencoded data, not multipart
 *  https://stackoverflow.com/questions/39870867/what-does-app-usebodyparser-json-do
 */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

export default app;