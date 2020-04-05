import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import '@babel/polyfill'

import app from './config/app';
import setRoutes from './routes/index';

dotenv.config();
const db = "mongodb://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@ds163517.mlab.com:63517/" + process.env.DB_NAME;
const port = process.env.PORT || 4000;
// app.use(cors); //This stops everything??? 




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
