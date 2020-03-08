const badgeServiceData = {
    body: {
        name: "John Doe",
        imageID: "jsfkslgslfjdklfj23",
        audioID: "ui23jgwk9sv8dv893k",
        time: 1582858631340,
        badgeURL: "JohnDoe12093",
        expirationCode: 1
    }
}
const badgeServiceDataExpected =
{
    name: "John Doe",
    imageKey: "jsfkslgslfjdklfj23",
    audioKey: "ui23jgwk9sv8dv893k",
    timestamp: 1582858631340,
    badgeURL: "JohnDoe1339",
    expirationCode: 1
}

const badgeServiceData2 = {
    body: {
        name: "John Doe",
        imageID: "jsfkslgslfjdklfj23",
        audioID: "ui23jgwk9sv8dv893k",
        time: 1582858633456,
        badgeURL: "JohnDoe3456",
        expirationCode: 1
    }
}

const badgeServiceData2Expected =
{
    name: "John Doe",
    imageKey: "jsfkslgslfjdklfj23",
    audioKey: "ui23jgwk9sv8dv893k",
    timestamp: 1582858633456,
    badgeURL: "JohnDoe3454",
    expirationCode: 1
}

const badgeServiceFormulateBadgeData = {
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

const badgeServiceFormulateBadgeDataNoResult = {
    result: []
}

const badgeServiceFormulateBadgeDataExpected =
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
const badgeServiceFormulateBadgeDataInvalidURL = {
    isValidBadgeURL: false
}

export default {
    badgeServiceData,
    badgeServiceDataExpected,
    badgeServiceData2,
    badgeServiceData2Expected,
    badgeServiceFormulateBadgeData,
    badgeServiceFormulateBadgeDataNoResult,
    badgeServiceFormulateBadgeDataExpected,
    badgeServiceFormulateBadgeDataInvalidURL
}