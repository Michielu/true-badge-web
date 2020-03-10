import app from '../../../index';
import supertest from 'supertest';

const { MongoClient } = require('mongodb');

import BadgeDataLayer from "../../../src/dataLayer/BadgeDataLayer.js";
import testData from '../../config/badgeTestData';
import BadgeRoutes from '../../../src/routes/badgeRoutes';


// app.get('/test', async (req, res) => {
//     res.json({ message: 'pass!' })
// })

describe('Test Image Routes', () => {
    let connection;
    let db;
    let request;

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

        await app.listen(4000);
        request = supertest(app);
    });

    afterAll(async () => {
        await connection.close();
        app.close();
    });

    it('Gets the test endpoint', async done => {
        // Sends GET Request to /test endpoint
        const res = await request.post('/badge/upload')
            .send(testData.badgeServiceData.body);

        const returnedJSON = JSON.parse(res.text);
        delete returnedJSON.result["_id"];

        expect(res.status).toBe(200)
        expect(returnedJSON.result).toEqual(testData.badgeServiceDataExpected)
        done()
    })
});