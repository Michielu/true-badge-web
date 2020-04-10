const { MongoClient } = require('mongodb');
const ObjectID = require('mongodb').ObjectID;

import AudioDataLayer from "../../src/dataLayer/AudioDataLayer.js";
import { dataLayerData as testData } from '../config/audioTestData';


describe('Test Audio Routes', () => {
    let connection;
    let db;
    let audioID;

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

    it('test audio post: return data', async () => {
        const res = await AudioDataLayer.put(db, testData.dataLayerPostData);
        audioID = res.result;
        //Cannot predict the audioID 
        expect(res.err).toBe(undefined);
    });

    it('test badge post: stores badge', async () => {
        const audioCollection = db.collection('audio');
        const res2 = await audioCollection.findOne({ _id: new ObjectID(audioID) });
        expect(res2).toEqual(testData.dataLayerPostData);
    });
});