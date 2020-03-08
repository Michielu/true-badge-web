const collectionName = 'image';
var ObjectID = require('mongodb').ObjectID; //TODO mayve move this out of here

const ImageDataLayer = {
    put: async (db, imageData) => {
        console.log("image Data: ", imageData)
        const res = await db.collection(collectionName).insertOne(imageData);
        console.log("res in imageDatalayer: ", res.ops[0]["_id"]);
        return { "err": res.err, "result": res.ops[0]["_id"] };
    },
    get: async (db, imageID) => {
        const details = {
            '_id': new ObjectID(imageID)
        };
        const res = await db.collection(collectionName).find(details).toArray();

        console.log("Res: ", res);
        return { "err": res.err, "result": res }
    }
}

export default ImageDataLayer;