const { MongoClient } = require('mongodb');
const polyfill = require('@babel/polyfill');

// import ImageService from "../../src/services/ImageService";
// import ImageDataLayer from "../../src/dataLayer/ImageDataLayer";
// import testData from '../config/imageTestData';

describe('Test ImageRoutes', () => {
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
    it('Blank image service test', async () => {
        const a = 1;
        expect(a).toEqual(1);
    });
});