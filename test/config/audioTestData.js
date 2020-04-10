export const dataLayerData = {
    dataLayerPostData: {
        description: null,
        contentType: 'audio/webm',
        size: 90607,
        audio: ["Binary"]
    },

    dataLayerGetReturnData: {
        err: undefined,
        result:
            [{
                _id: "5e6577536dec4f658d93f5c1",
                description: null,
                contentType: 'audio/webm',
                size: 90607,
                audio: ["Binary"]
            }]
    }
}

export const routesData = {
    POSTEndpoint: {
        body: {
            description: "description"
        },
        file: {
            mimetype: 'audio/webm',
            size: 90777,
        }
    },
    returnPOSTEndpoingInvalid: {
        "errorMessage": "Error uploading audio",
        "errorMessageLong": "Error uploading audio"
    },
    returnGET: {
        "contentType": "audio/webm",
        "description": "description",
        "audio": ["Binary"],
        "size": 90777
    },
    rerutnGETInvalid: {
        "errorMessage": "Error retrieving audio",
        "errorMessageLong": "Error retrieving audio"
    }
}