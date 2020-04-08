
export const serviceData = {
    badgeServiceData: {
        body: {
            name: "John Doe",
            imageID: "jsfkslgslfjdklfj23",
            audioID: "ui23jgwk9sv8dv893k",
            timestamp: 1582858631340,
            badgeURL: "JohnDoe1339",
            expirationCode: 1
        }
    },
    badgeServiceDataExpected: {
        name: "John Doe",
        imageID: "jsfkslgslfjdklfj23",
        audioID: "ui23jgwk9sv8dv893k",
        timestamp: 1582858631340,
        badgeURL: "JohnDoe1339",
        expirationCode: 1
    },
    badgeServiceDataExpected2: {
        name: "John Doe",
        imageID: "jsfkslgslfjdklfj23",
        audioID: "ui23jgwk9sv8dv893k",
        timestamp: 1582858631340,
        isValidBadgeURL: true,
        badgeURL: "JohnDoe1339",
        expirationCode: 1
    },
    badgeServiceData2: {
        body: {
            name: "John Doe",
            imageID: "jsfkslgslfjdklfj23",
            audioID: "ui23jgwk9sv8dv893k",
            timestamp: 1582858633456,
            badgeURL: "JohnDoe3456",
            expirationCode: 1
        }
    },
    badgeServiceData2Expected: {
        name: "John Doe",
        imageID: "jsfkslgslfjdklfj23",
        audioID: "ui23jgwk9sv8dv893k",
        timestamp: 1582858633456,
        badgeURL: "JohnDoe3454",
        expirationCode: 1
    },
    badgeServiceFormulateBadgeData: {
        result: [{
            _id: "5e5ae51a4615fc8274d28667",
            name: 'michielu menning',
            imageID: '23sdg515a66f68272asdgce2',
            audioID: '5e518515a66f6827aa562ce9',
            timestamp: 1583015194350,
            badgeURL: 'michmenn4350',
            expirationCode: 1
        }]
    },
    badgeServiceFormulateBadgeDataNoResult: {
        result: []
    },
    badgeServiceFormulateBadgeDataExpected:
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
}

export const routesData = {
    POSTInvalidRequest: {
        "errorMessage": "Invalid request",
        "errorMessageLong": "Data was in incorrect format"
    },
    badgeRoutePostData: {
        body: {
            name: "Ann Doe",
            imageID: "fdsfdfdfdfdfdfdfdf",
            audioID: "asdsfasdferererere",
            timestamp: 1590737863133,
            badgeURL: "AnnDoe3132",
            expirationCode: 1
        }
    },
    badgeRoutePostDataExpected:
    {
        name: "Ann Doe",
        imageID: "fdsfdfdfdfdfdfdfdf",
        audioID: "asdsfasdferererere",
        timestamp: 1590737863133,
        badgeURL: "AnnDoe3132",
        expirationCode: 1
    },
    badgeRoutePostReturn: {
        name: "Ann Doe",
        imageID: "fdsfdfdfdfdfdfdfdf",
        audioID: "asdsfasdferererere",
        timestamp: 1590737863133,
        badgeURL: "AnnDoe3132",
        expirationCode: 1,
        isValidBadgeURL: true

    },
    formulateBadgeDataInvalidURL: {
        isValidBadgeURL: false
    }
}

export const dataLayerData = {
    badgeDataLayerData: {
        body: {
            name: "Tim Doe",
            imageID: "jkljkljkljkljkljkj",
            audioID: "qwertyuioplkjhgfds",
            timestamp: 1590737863133,
            badgeURL: "TimDoe3132",
            expirationCode: 1
        }
    },
    badgeDataLayerDataExpected:
    {
        name: "Tim Doe",
        imageID: "jkljkljkljkljkljkj",
        audioID: "qwertyuioplkjhgfds",
        timestamp: 1590737863133,
        badgeURL: "TimDoe3132",
        expirationCode: 1
    }
}