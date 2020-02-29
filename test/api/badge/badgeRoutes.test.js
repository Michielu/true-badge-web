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

    it('test badge post return data', async () => {
        const res = await BadgeDataLayer.put(db, badgeTestData);
        expect(res.result).toEqual(badgeTestData);
    });

    it('test badge post stores badge', async () => {
        const badgeCollection = db.collection('badge');
        const res = await badgeCollection.findOne({ badgeURL: 'JohnDoe12093' });
        expect(res).toEqual(badgeTestData);
    });
});