const collectionName = 'image';
var ObjectID = require('mongodb').ObjectID; //TODO mayve move this out of here

const ImageDataLayer = {
    put: async (db, imageData) => {
        console.log("image Data: ", imageData)
        const res = await db.collection(collectionName).insertOne(imageData);
        return { "err": res.err, "result": res.ops[0] };
    },
    get: async (db, imageID) => {
        const details = {
            '_id': new ObjectID("5e64389318ca864a4e6d15ca")
        };
        const res = await db.collection(collectionName).find(details).toArray();

        console.log("Res: ", res);
        return { "err": res.err, "result": res }
    }
}

export default ImageDataLayer;