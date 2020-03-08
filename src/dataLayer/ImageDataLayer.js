const collectionName = 'image';

const ImageDataLayer = {
    put: async (db, imageData) => {
        const res = await db.collection(collectionName).insertOne(imageData);
        return { "err": res.err, "result": res.ops[0]["_id"] };
    },
    get: async (db, imageID) => {
        const res = await db.collection(collectionName).find(imageID).toArray();
        return { "err": res.err, "result": res }
    }
}

export default ImageDataLayer;