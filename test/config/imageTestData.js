export const dataLayerData = {

    dataLayerPostData: {
        description: null,
        contentType: 'image/jpeg',
        size: 90607,
        img: ["Binary"]
    },

    dataLayerGetReturnData: {
        err: undefined,
        result:
            [{
                _id: "5e6577536dec4f658d93f5c1",
                description: null,
                contentType: 'image/jpeg',
                size: 90607,
                img: ["Binary"]
            }]
    }
}

export const routesData = {

    POSTEndpoint: {
        body: {
            description: "description"
        },
        file: {
            mimetype: 'image/jpeg',
            size: 90777,
        }
    },

    returnPOSTEndpoingInvalid: {
        "errorMessage": "Error uploading image",
        "errorMessageLong": "Error uploading image"
    },

    returnGET: {
        "contentType": "image/jpeg",
        "description": "description",
        "img": ["Binary"],
        "size": 90777
    },

    rerutnGETInvalid: {
        "errorMessage": "Error retrieving image",
        "errorMessageLong": "Error retrieving image"
    }
}