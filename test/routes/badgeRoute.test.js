import supertest from 'supertest';
import { MongoClient } from 'mongodb';

import app from '../../src/config/app';
import testData from '../config/badgeTestData';
import BadgeRoutes from '../../src/routes/badgeRoutes';

describe('Test Badge Routes', () => {
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

        request = supertest(app);
    });

    afterAll(() => {
        connection.close();
    });


    test('POST /badge/upload', async done => {
        const res = await request.post('/badge/upload')
            .send(testData.badgeServiceData.body)
            .set('Accept', 'application/json');

        const returnedJSON = JSON.parse(res.text);
        delete returnedJSON.result["_id"];

        expect(res.status).toBe(200)
        expect(returnedJSON.result).toEqual(testData.badgeServiceDataExpected)
        done()
    });

    test('POST /badge/upload -- invalid input data', async done => {
        const res = await request.post('/badge/upload')
            .send({})
            .set('Accept', 'application/json');

        console.log("res is : '", res.body);

        expect(res.status).toBe(200)
        expect(res.body).toEqual(testData.POSTInvalidRequest)
        done()
    });

    test.skip('POST /badge/upload -- invalid request', async done => {
        //TODO mock  BadgeDataLayer.put to return an err 
        const res = await request.post('/badge/upload')
            .send({})
            .set('Accept', 'application/json');

        console.log("res is : '", res.body);

        expect(res.status).toBe(200)
        expect(res.body).toEqual(testData.POSTInvalidRequest)
        done()
    });

    it('GET /b/:id', async done => {
        //Upload badge so it's not dependment on test one. I'm not testing /badge/upload
        await request.post('/badge/upload')
            .send(testData.badgeServiceData.body);
        const res = await request.get('/b/' + testData.badgeServiceData.body.badgeURL);
        delete res.body["_id"];

        expect(res.status).toBe(200)
        expect(res.body).toEqual(testData.badgeServiceDataExpected2)
        done()
    });

    it('GET /b/:id -- invalid url', async done => {
        // Sends GET Request to /test endpoint
        const res = await request.get('/b/' + "invalidURL");

        expect(res.status).toBe(200)
        expect(res.body).toEqual(testData.badgeServiceFormulateBadgeDataInvalidURL)
        done()
    });
});