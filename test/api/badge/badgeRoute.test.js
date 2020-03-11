import app from '../../../index';
import supertest from 'supertest';

const { MongoClient } = require('mongodb');

import testData from '../../config/badgeTestData';
import BadgeRoutes from '../../../src/routes/badgeRoutes';

describe('Test Image Routes', () => {
    let connection;
    let db;
    let request;
    let server;

    beforeAll(async () => {
        //process.env.MONGO_URL is cached locally in node_modules/.cache
        connection = await MongoClient.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        // Make sure you add the database name and not the collection name
        db = await connection.db(process.env.TEST_DB_NAME);

        BadgeRoutes.post(app, db);
        BadgeRoutes.get(app, db);

        server = await app.listen(4000);
        request = supertest(app);
    });

    afterAll(async (done) => {
        await connection.close();
        server.close();
    });

    it('Badge post endpoint', async done => {
        // Sends GET Request to /test endpoint
        const res = await request.post('/badge/upload')
            .send(testData.badgeServiceData.body);

        const returnedJSON = JSON.parse(res.text);
        delete returnedJSON.result["_id"];

        expect(res.status).toBe(200)
        expect(returnedJSON.result).toEqual(testData.badgeServiceDataExpected)
        done()
    });

    it('Badge get endpoint', async done => {
        // Sends GET Request to /test endpoint
        await request.post('/badge/upload')
            .send(testData.badgeServiceData.body);
        const res = await request.get('/b/' + testData.badgeServiceData.body.badgeURL);
        delete res.body["_id"];

        expect(res.status).toBe(200)
        expect(res.body).toEqual(testData.badgeServiceDataExpected2)
        done()
    });
});