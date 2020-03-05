import BadgeService from "../../../src/services/badgeService";
import BadgeDataLayer from "../../../src/dataLayer/BadgeDataLayer";
import testData from '../../config/testData';
import badgeService from '../../__mocks__/badgeService';

describe('Test badgeRoutes', () => {
    //Mock  generateBadgeID?  Yes for practice. TODO
    it('Test createBadgeData', () => {
        // const spy = jest.spyOn(BadgeDataLayer, 'get').mockImplementation((db, badgeUrl) => {
        //     return { "err": null, "result": [expected] }
        // });
        // const BadgeServiceSpy = jest.spyOn(BadgeService, 'getUniqueNum').mockImplementation(("badgeUrlName", 10000, null) => {
        //     return 4350;
        // });

        const badge = BadgeService.createBadgeData(testData.badgeTestData);
        // expect(spy).toHaveBeenCalled();
        expect(badge).toEqual(expected);
        // spy.mockRestore();
    });

    it('Test generateBadgeID', async () => {
        const badge = await BadgeService.createBadgeData(testData.badgeTestData);
        expect(badge.badgeURL).toEqual(expected.badgeURL);
    });

    it('test badge get: formulateBadgeData -- accurate data', async () => {
        const returnData = BadgeService.formulateBadgeData(testData.formulateBadgeDataData);
        expect(returnData).toEqual(testData.formulateBadgeDataExpected);
    });

    it('test badge get: formulateBadgeData -- invalid url ', async () => {
        const returnData = BadgeService.formulateBadgeData(testData.formulateBadgeDataDataNoResult);
        expect(returnData).toEqual(testData.formulateBadgeDataDataNoResultExpected);
    });

    it('test badge get: formulateBadgeData -- error ', async () => {
        const returnData = BadgeService.formulateBadgeData({ err: "This has an error" });
        expect(returnData).toEqual({ err: "This has an error" });
    });
});