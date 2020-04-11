import { audioCollection } from '../config/collections';

const AudioDataLayer = {
    put: async (db, audioData) => {
        const res = await db.collection(audioCollection).insertOne(audioData);
        return { "err": res.err, "result": res.ops[0]["_id"] };
    },
    get: async (db, audioID) => {
        const res = await db.collection(audioCollection).find(audioID).toArray();
        return { "err": res.err, "result": res }
    }
}

export default AudioDataLayer;