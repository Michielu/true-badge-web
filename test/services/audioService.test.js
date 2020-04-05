const { MongoClient } = require('mongodb');
const polyfill = require('@babel/polyfill');

// import AudioService from "../../src/services/AudioService";
// import AudioDataLayer from "../../src/dataLayer/AudioDataLayer";
// import testData from '../config/audioTestData';

describe('Test AudioRoutes', () => {
    let connection;
    let db;

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

    //Couldn't think of much to test hmmm
    it('Blank audio service test', async () => {
        const a = 1;
        expect(a).toEqual(1);
    });
});