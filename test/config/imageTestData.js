const dataLayerPostData = {
    description: null,
    contentType: 'image/jpeg',
    size: 90607,
    img: ["Binary"]
}

const dataLayerGetReturnData = {
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

const POSTEndpoint = {
    body: {
        description: "description"
    },
    file: {
        mimetype: 'image/jpeg',
        size: 90777,
    }
}
export default {
    dataLayerPostData,
    dataLayerGetReturnData,
    POSTEndpoint
}