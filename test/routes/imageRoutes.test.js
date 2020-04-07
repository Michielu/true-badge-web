import supertest from 'supertest';
import { MongoClient } from 'mongodb';

import app from '../../src/config/app';
import testData from '../config/imageTestData';
import ImageRoutes from '../../src/routes/imageRoutes';
// import imageService from '../config/imageTestData';
// import a from '../../src/services/imageService'


jest.mock('../../src/services/imageService');

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

        ImageRoutes.post(app, db);
        ImageRoutes.get(app, db);

        request = supertest(app);
    });

    afterAll(() => {
        connection.close();
    });

    it.only('POST /image/upload', async done => {
        //TODO mock BadgeService.createBadgeData
        const res = await request.post('/image/upload')
            .send(testData.POSTEndpoint);

        // console.log("res: ", res);
        const returnedJSON = JSON.parse(res.text);
        delete returnedJSON.result["_id"];

        expect(res.status).toBe(200)
        expect(returnedJSON.result).toEqual(testData.badgeServiceDataExpected)
        done()
    });

    it('Image get endpoint', async done => {
        //Upload image so it's not dependent
        // await request.post('/badge/upload')
        //     .send(testData.badgeServiceData.body);
        // const res = await request.get('/b/' + testData.badgeServiceData.body.badgeURL);
        // delete res.body["_id"];

        // expect(res.status).toBe(200)
        // expect(res.body).toEqual(testData.badgeServiceDataExpected2)
        // done()
    });
});