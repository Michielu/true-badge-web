const collectionName = 'audio';

const AudioDataLayer = {
    put: async (db, audioData) => {
        const res = await db.collection(collectionName).insertOne(audioData);
        return { "err": res.err, "result": res.ops[0]["_id"] };
    },
    get: async (db, audioID) => {
        const res = await db.collection(collectionName).find(audioID).toArray();
        return { "err": res.err, "result": res }
    }
}

export default AudioDataLayer;