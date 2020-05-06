import supertest from 'supertest';
import { MongoClient } from 'mongodb';

import app from '../../src/config/app';
import { routesData as testData } from '../config/imageTestData';
import ImageRoutes from '../../src/routes/imageRoutes';
import ImageService from '../../src/services/imageService';

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

    it('POST /image/upload', async done => {
        ImageService.configureBadgeData = jest.fn().mockImplementation((a) => {
            const req = a.body;
            return {
                description: req.body.description,
                contentType: req.file.mimetype,
                size: req.file.size,
                img: ["Binary"]
            };
        });
        const res = await request.post('/image/upload')
            .send(testData.POSTEndpoint);

        const returnedJSON = JSON.parse(res.text);

        expect(res.status).toBe(200)
        expect(returnedJSON.result).toBeTruthy();
        expect(returnedJSON.errorMessage).toBeUndefined();
        done()
    });

    it('POST /image/upload -- invalid input', async done => {
        const res = await request.post('/image/upload').send({});
        const returnedJSON = JSON.parse(res.text);

        expect(res.status).toBe(200)
        expect(returnedJSON).toEqual(testData.returnPOSTEndpoingInvalid)
        done()
    });

    it('GET /image/upload', async done => {
        ImageService.configureBadgeData = jest.fn().mockImplementation((a) => {
            const req = a.body;
            return {
                description: req.body.description,
                contentType: req.file.mimetype,
                size: req.file.size,
                img: ["Binary"]
            };
        });
        const uploadedImageRes = await request.post('/image/upload')
            .send(testData.POSTEndpoint);

        const uploadJSON = JSON.parse(uploadedImageRes.text);

        expect(uploadJSON.result).toBeTruthy();
        expect(uploadJSON.errorMessage).toBeUndefined();

        const imageID = uploadJSON.result;

        const res = await request.get('/image/' + imageID);
        delete res.body.result[0]["_id"];
        expect(res.status).toBe(200)
        expect(res.body.result[0]).toEqual(testData.returnGET)
        done()
    });

    it('GET /image/upload -- invalid input', async done => {
        const res = await request.get('/image/InvalidImageKey');
        expect(res.status).toBe(200)
        expect(res.body).toEqual(testData.rerutnGETInvalid)
        done()
    });
});