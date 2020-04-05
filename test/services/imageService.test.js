const { MongoClient } = require('mongodb');
const polyfill = require('@babel/polyfill');

import ImageService from "../../src/services/ImageService";
import ImageDataLayer from "../../src/dataLayer/ImageDataLayer";
import testData from '../config/imageTestData';
import ImageService from '../../__mocks__/imageService';

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

    //TODO test this
    it('Test createImageData', async () => {
        const image = await ImageService.createImageData(testData.ImageServiceData, db);
        expect(image).toEqual(testData.ImageServiceDataExpected);
    });

    // it('Test getUniqueNum -- different URL because person with ImageURL is already present', async () => {
    //     const spy = jest.spyOn(ImageDataLayer, 'get');
    //     const Image1 = await ImageService.createImageData(testData.ImageServiceData2, db);
    //     expect(spy).toHaveBeenCalledTimes(1);

    //     await ImageDataLayer.put(db, Image1);
    //     const Image2 = await ImageService.createImageData(testData.ImageServiceData2, db);
    //     expect(spy).toHaveBeenCalledTimes(3);
    //     expect(Image2).toEqual(testData.ImageServiceData2Expected);
    // });

    // it('test Image get: formulateImageData -- accurate data', async () => {
    //     const returnData = ImageService.formulateImageData(testData.ImageServiceFormulateImageData);
    //     expect(returnData).toEqual(testData.ImageServiceFormulateImageDataExpected);
    // });

    // it('test Image get: formulateImageData -- invalid url ', async () => {
    //     const returnData = ImageService.formulateImageData(testData.ImageServiceFormulateImageDataNoResult);
    //     expect(returnData).toEqual(testData.ImageServiceFormulateImageDataInvalidURL);
    // });

    // it('test Image get: formulateImageData -- error ', async () => {
    //     const returnData = ImageService.formulateImageData({ err: "This has an error" });
    //     expect(returnData).toEqual({ err: "This has an error" });
    // });
});