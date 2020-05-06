const { MongoClient } = require('mongodb');

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

    /* Not much to test  */
    it('Blank image service test', async () => {
        const a = 1;
        expect(a).toEqual(1);
    });
});