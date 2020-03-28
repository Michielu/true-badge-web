const { MongoClient } = require('mongodb');

import BadgeDataLayer from "../../../src/dataLayer/BadgeDataLayer.js";
import testData from '../../config/badgeTestData';

describe('Test badge dataLayer', () => {
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

    it('test badge post: return data', async () => {
        const res = await BadgeDataLayer.put(db, testData.badgeServiceData.body);
        expect(res.result).toEqual(testData.badgeServiceData.body);
    });

    it('test badge post: stores badge', async () => {
        const badgeCollection = db.collection('badge');
        const res = await badgeCollection.findOne({ badgeURL: 'JohnDoe1339' });
        expect(res).toEqual(testData.badgeServiceData.body);
    });

    it('test badge get: retrieves data. Format not checked ', async () => {
        const res = await BadgeDataLayer.get(db, 'JohnDoe1339');
        expect(res.result).not.toBe(null);
    });

    it('test badge get: retrieves data. Format check', async () => {
        const res = await BadgeDataLayer.get(db, 'JohnDoe1339');
        expect(res.result[0]).toEqual(testData.badgeServiceData.body);
        expect(res.err).toBe(undefined);
    });

    it('test badge get: incorrect badgeURL', async () => {
        const res = await BadgeDataLayer.get(db, 'invalidURL123');
        expect(res.result[0]).toEqual(undefined);
    });

    it('test badge get: err', async () => {
        //TODO how to get error response.. 
    });

});