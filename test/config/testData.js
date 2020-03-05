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

export default {
    badgeTestData,
    expected,
    formulateBadgeDataData,
    formulateBadgeDataDataNoResult,
    formulateBadgeDataExpected,
    formulateBadgeDataDataNoResultExpected
}