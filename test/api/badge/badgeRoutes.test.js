const { MongoClient } = require('mongodb');

import BadgeDataLayer from "../../../src/dataLayer/BadgeDataLayer.js";

describe('Test badgeRoutes', () => {
    let connection;
    let db;
    let badgeTestData = {
        name: "John Doe",
        imageKey: "jsfkslgslfjdklfj23",
        audioKey: "ui23jgwk9sv8dv893k",
        timestamp: 1582858631340,
        badgeURL: "JohnDoe12093",
        expirationCode: 1
    }

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
        const res = await BadgeDataLayer.put(db, badgeTestData);
        expect(res.result).toEqual(badgeTestData);
    });

    it('test badge post: stores badge', async () => {
        const badgeCollection = db.collection('badge');
        const res = await badgeCollection.findOne({ badgeURL: 'JohnDoe12093' });
        expect(res).toEqual(badgeTestData);
    });

    it('test badge get: retrieves data. Format not checked ', async () => {
        const res = await BadgeDataLayer.get(db, 'JohnDoe12093');
        expect(res.result).not.toBe(null);
    });

    it('test badge get: retrieves data. Format check', async () => {
        const res = await BadgeDataLayer.get(db, 'JohnDoe12093');
        expect(res.result[0]).toEqual(badgeTestData);
        expect(res.err).toBe(undefined);
    });

    it('test badge get: incorrect badgeURL', async () => {
        const res = await BadgeDataLayer.get(db, 'invalidURL123');
        expect(res.result[0]).toEqual(undefined);
    });
    it('test badge get: err', async () => {
        //TODO how to get error response.. mock! 
    });

});