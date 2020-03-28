const badgeServiceData = {
    body: {
        name: "John Doe",
        imageID: "jsfkslgslfjdklfj23",
        audioID: "ui23jgwk9sv8dv893k",
        timestamp: 1582858631340,
        badgeURL: "JohnDoe1339",
        expirationCode: 1
    }
}
const badgeServiceDataExpected =
{
    name: "John Doe",
    imageID: "jsfkslgslfjdklfj23",
    audioID: "ui23jgwk9sv8dv893k",
    timestamp: 1582858631340,
    badgeURL: "JohnDoe1339",
    expirationCode: 1
}

const badgeServiceDataExpected2 =
{
    name: "John Doe",
    imageID: "jsfkslgslfjdklfj23",
    audioID: "ui23jgwk9sv8dv893k",
    timestamp: 1582858631340,
    isValidBadgeURL: true,
    badgeURL: "JohnDoe1339",
    expirationCode: 1
}

const badgeServiceData2 = {
    body: {
        name: "John Doe",
        imageID: "jsfkslgslfjdklfj23",
        audioID: "ui23jgwk9sv8dv893k",
        timestamp: 1582858633456,
        badgeURL: "JohnDoe3456",
        expirationCode: 1
    }
}

const badgeServiceData2Expected =
{
    name: "John Doe",
    imageID: "jsfkslgslfjdklfj23",
    audioID: "ui23jgwk9sv8dv893k",
    timestamp: 1582858633456,
    badgeURL: "JohnDoe3454",
    expirationCode: 1
}

const badgeServiceFormulateBadgeData = {
    result: [{
        _id: "5e5ae51a4615fc8274d28667",
        name: 'michielu menning',
        imageID: '23sdg515a66f68272asdgce2',
        audioID: '5e518515a66f6827aa562ce9',
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
    imageID: '23sdg515a66f68272asdgce2',
    audioID: '5e518515a66f6827aa562ce9',
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
    badgeServiceDataExpected2,
    badgeServiceData2,
    badgeServiceData2Expected,
    badgeServiceFormulateBadgeData,
    badgeServiceFormulateBadgeDataNoResult,
    badgeServiceFormulateBadgeDataExpected,
    badgeServiceFormulateBadgeDataInvalidURL
}