const { MongoClient } = require('mongodb');
const ObjectID = require('mongodb').ObjectID;

import ImageDataLayer from "../../src/dataLayer/ImageDataLayer.js";
import { dataLayerData as testData } from '../config/imageTestData';


describe('Test Image Routes', () => {
    let connection;
    let db;
    let imageID;

    beforeAll(async () => {
        //process.env.MONGO_URL is cached locally in node_modules/.cache
        connection = await MongoClient.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        db = await connection.db(process.env.TEST_DB_NAME);
    });

    afterAll(async () => {
        await connection.close();
    });

    it('test image post: return data', async () => {
        const res = await ImageDataLayer.put(db, testData.dataLayerPostData);
        imageID = res.result;
        //Cannot predict the imageID 
        expect(res.err).toBe(undefined);
    });

    it('test badge post: stores badge', async () => {
        const imageCollection = db.collection('test-image');
        const res2 = await imageCollection.findOne({ _id: new ObjectID(imageID) });
        expect(res2).toEqual(testData.dataLayerPostData);
    });
});