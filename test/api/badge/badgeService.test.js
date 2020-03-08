const { MongoClient } = require('mongodb');
const polyfill = require('@babel/polyfill');

import BadgeService from "../../../src/services/badgeService";
import BadgeDataLayer from "../../../src/dataLayer/BadgeDataLayer";
import testData from '../../config/badgeTestData';
import badgeService from '../../__mocks__/badgeService';

describe('Test badgeRoutes', () => {
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

    it('Test createBadgeData', async () => {
        const badge = await BadgeService.createBadgeData(testData.badgeServiceData, db);
        expect(badge).toEqual(testData.badgeServiceDataExpected);
        expect(badge.badgeURL).toEqual(testData.badgeServiceDataExpected.badgeURL);
    });

    it('Test getUniqueNum -- different URL because person with BadgeURL is already present', async () => {
        const spy = jest.spyOn(BadgeDataLayer, 'get');
        const badge1 = await BadgeService.createBadgeData(testData.badgeServiceData2, db);
        expect(spy).toHaveBeenCalledTimes(1);

        await BadgeDataLayer.put(db, badge1);
        const badge2 = await BadgeService.createBadgeData(testData.badgeServiceData2, db);
        expect(spy).toHaveBeenCalledTimes(3);
        expect(badge2).toEqual(testData.badgeServiceData2Expected);
    });

    it('test badge get: formulateBadgeData -- accurate data', async () => {
        const returnData = BadgeService.formulateBadgeData(testData.badgeServiceFormulateBadgeData);
        expect(returnData).toEqual(testData.badgeServiceFormulateBadgeDataExpected);
    });

    it('test badge get: formulateBadgeData -- invalid url ', async () => {
        const returnData = BadgeService.formulateBadgeData(testData.badgeServiceFormulateBadgeDataNoResult);
        expect(returnData).toEqual(testData.badgeServiceFormulateBadgeDataInvalidURL);
    });

    it('test badge get: formulateBadgeData -- error ', async () => {
        const returnData = BadgeService.formulateBadgeData({ err: "This has an error" });
        expect(returnData).toEqual({ err: "This has an error" });
    });
});