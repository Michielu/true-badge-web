
import BadgeService from "../../../src/services/badgeService";
import BadgeDataLayer from "../../../src/dataLayer/BadgeDataLayer";

describe('Test badgeRoutes', () => {
    const badgeTestData = {
        body: {
            name: "John Doe",
            imageID: "jsfkslgslfjdklfj23",
            audioID: "ui23jgwk9sv8dv893k",
            time: 1582858631340,
            badgeURL: "JohnDoe12093",
            expirationCode: 1
        }
    }

    const expected =
    {
        name: "John Doe",
        imageKey: "jsfkslgslfjdklfj23",
        audioKey: "ui23jgwk9sv8dv893k",
        timestamp: 1582858631340,
        badgeURL: "JohnDoe1340",
        expirationCode: 1
    }

    const formulateBadgeDataData = {
        result: [{
            _id: "5e5ae51a4615fc8274d28667",
            name: 'michielu menning',
            imageKey: '23sdg515a66f68272asdgce2',
            audioKey: '5e518515a66f6827aa562ce9',
            timestamp: 1583015194350,
            badgeURL: 'michmenn4350',
            expirationCode: 1
        }]
    }

    const formulateBadgeDataDataNoResult = {
        result: []
    }

    const formulateBadgeDataExpected =
    {
        _id: "5e5ae51a4615fc8274d28667",
        name: 'michielu menning',
        imageKey: '23sdg515a66f68272asdgce2',
        audioKey: '5e518515a66f6827aa562ce9',
        timestamp: 1583015194350,
        badgeURL: 'michmenn4350',
        expirationCode: 1,
        isValidBadgeURL: true
    }
    const formulateBadgeDataDataNoResultExpected = {
        isValidBadgeURL: false
    }


    //Mock  generateBadgeID?  Yes for practice. TODO
    it('Test createBadgeData', () => {
        // const spy = jest.spyOn(BadgeDataLayer, 'get').mockImplementation((db, badgeUrl) => {
        //     return { "err": null, "result": [expected] }
        // });
        // const BadgeServiceSpy = jest.spyOn(BadgeService, 'getUniqueNum').mockImplementation(("badgeUrlName", 10000, null) => {
        //     return 4350;
        // });

        const badge = BadgeService.createBadgeData(badgeTestData);
        expect(spy).toHaveBeenCalled();
        expect(badge).toEqual(expected);
        // spy.mockRestore();
    });

    it('Test generateBadgeID', async () => {
        const badge = await BadgeService.createBadgeData(badgeTestData);
        expect(badge.badgeURL).toEqual(expected.badgeURL);
    });

    it('test badge get: formulateBadgeData -- accurate data', async () => {
        const returnData = BadgeService.formulateBadgeData(formulateBadgeDataData);
        expect(returnData).toEqual(formulateBadgeDataExpected);
    });

    it('test badge get: formulateBadgeData -- invalid url ', async () => {
        const returnData = BadgeService.formulateBadgeData(formulateBadgeDataDataNoResult);
        expect(returnData).toEqual(formulateBadgeDataDataNoResultExpected);
    });

    it('test badge get: formulateBadgeData -- error ', async () => {
        const returnData = BadgeService.formulateBadgeData({ err: "This has an error" });
        expect(returnData).toEqual({ err: "This has an error" });
    });
});