import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import setRoutes from './src/routes/index';

const app = express();
dotenv.config();
const db = "mongodb://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@ds163517.mlab.com:63517/" + process.env.DB_NAME;
const port = 3000;
// Body Parse is a middleware for http requests
// extract the entire body portion of an incoming request stream and exposes it on req.body
app.use(bodyParser.urlencoded({
    extended: false
}));

MongoClient.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, database) => {
    if (err) return console.log(err)

    // Make sure you add the database name and not the collection name
    let datab = database.db(process.env.DB_NAME);

    setRoutes(app, datab);

    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
})