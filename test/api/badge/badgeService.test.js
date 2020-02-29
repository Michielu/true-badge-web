
import BadgeService from "../../../src/services/badgeService";
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

    //Mock  generateBadgeID?  Yes for practice. TODO
    it('Test createBadgeData', () => {
        const badge = BadgeService.createBadgeData(badgeTestData);
        expect(badge).toEqual(expected);
    });

    it('Test generateBadgeID', () => {
        const badge = BadgeService.createBadgeData(badgeTestData);
        expect(badge.badgeURL).toEqual(expected.badgeURL);
    });
});