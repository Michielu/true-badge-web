import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

import setRoutes from './src/routes/index';

const app = express();
dotenv.config();
const db = "mongodb://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@ds163517.mlab.com:63517/true-badge";
const port = 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));

MongoClient.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, database) => {
    if (err) return console.log(err)

    // Make sure you add the database name and not the collection name
    let datab = database.db("true-badge");

    setRoutes(app, datab);

    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
})