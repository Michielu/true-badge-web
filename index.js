import express from 'express';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';
import cors from 'cors';

import db from './src/config/db';
const app = express();
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
    let datab = database.db("true-badge")

    // require('./routes')(app, datab);
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
})

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))