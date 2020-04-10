import supertest from 'supertest';
import { MongoClient } from 'mongodb';

import app from '../../src/config/app';
import { routesData as testData } from '../config/audioTestData';
import AudioRoutes from '../../src/routes/audioRoutes';
import AudioService from '../../src/services/audioService';

describe('Test Audio Routes', () => {
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

        AudioRoutes.post(app, db);
        AudioRoutes.get(app, db);

        request = supertest(app);
    });

    afterAll(() => {
        connection.close();
    });

    it('POST /audio/upload', async done => {
        AudioService.configureAudioData = jest.fn().mockImplementation((a) => {
            console.log("hello there")
            const req = a.body;
            return {
                description: req.body.description,
                contentType: req.file.mimetype,
                size: req.file.size,
                audio: ["Binary"]
            };
        });
        const res = await request.post('/audio/upload')
            .send(testData.POSTEndpoint);

        const returnedJSON = JSON.parse(res.text);

        expect(res.status).toBe(200)
        expect(returnedJSON.result).toBeTruthy();
        expect(returnedJSON.errorMessage).toBeUndefined();
        done()
    });

    it('POST /audio/upload -- invalid input', async done => {
        const res = await request.post('/audio/upload').send({});
        const returnedJSON = JSON.parse(res.text);

        expect(res.status).toBe(200)
        expect(returnedJSON).toEqual(testData.returnPOSTEndpoingInvalid)
        done()
    });

    it('GET /audio/upload', async done => {
        AudioService.configureAudioData = jest.fn().mockImplementation((a) => {
            const req = a.body;
            return {
                description: req.body.description,
                contentType: req.file.mimetype,
                size: req.file.size,
                audio: ["Binary"]
            };
        });
        const uploadedAudioRes = await request.post('/audio/upload')
            .send(testData.POSTEndpoint);

        const uploadJSON = JSON.parse(uploadedAudioRes.text);

        expect(uploadJSON.result).toBeTruthy();
        expect(uploadJSON.errorMessage).toBeUndefined();

        const audioID = uploadJSON.result;

        const res = await request.get('/audio/' + audioID);
        delete res.body.result[0]["_id"];
        expect(res.status).toBe(200)
        expect(res.body.result[0]).toEqual(testData.returnGET)
        done()
    });

    it('GET /audio/upload -- invalid input', async done => {
        const res = await request.get('/audio/InvalidAudioKey');
        expect(res.status).toBe(200)
        console.log("body :", res.body)
        expect(res.body).toEqual(testData.rerutnGETInvalid)
        done()
    });
});