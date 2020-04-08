import supertest from 'supertest';
import { MongoClient } from 'mongodb';

import app from '../../src/config/app';
import { routesData as testData } from '../config/badgeTestData';
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


    it('POST /badge/upload', async done => {
        const res = await request.post('/badge/upload')
            .send(testData.badgeRoutePostData.body)
            .set('Accept', 'application/json');

        const returnedJSON = JSON.parse(res.text);
        delete returnedJSON.result["_id"];

        expect(res.status).toBe(200)
        expect(returnedJSON.result).toEqual(testData.badgeRoutePostDataExpected)
        done()
    });

    it('POST /badge/upload -- invalid input data', async done => {
        const res = await request.post('/badge/upload')
            .send({})
            .set('Accept', 'application/json');

        expect(res.status).toBe(200)
        expect(res.body).toEqual(testData.POSTInvalidRequest)
        done()
    });

    it('POST /badge/upload -- invalid request', async done => {
        const res = await request.post('/badge/upload')
            .send({})
            .set('Accept', 'application/json');

        expect(res.status).toBe(200)
        expect(res.body).toEqual(testData.POSTInvalidRequest)
        done()
    });

    it('GET /b/:id', async done => {
        //Upload badge so it's not dependment on test one. 
        //Not testing /badge/upload in this test
        await request.post('/badge/upload')
            .send(testData.badgeRoutePostData.body);
        const res = await request.get('/b/' + testData.badgeRoutePostData.body.badgeURL);
        delete res.body["_id"];

        expect(res.status).toBe(200)
        expect(res.body).toEqual(testData.badgeRoutePostReturn)
        done()
    });

    it('GET /b/:id -- invalid url', async done => {
        const res = await request.get('/b/' + "invalidURL");

        expect(res.status).toBe(200)
        expect(res.body).toEqual(testData.formulateBadgeDataInvalidURL)
        done()
    });
});