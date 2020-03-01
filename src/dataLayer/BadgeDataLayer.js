const collectionName = 'badge';
const BadgeDataLayer = {
    put: async (db, badgeData) => {
        const res = await db.collection(collectionName).insertOne(badgeData);
        return { "err": res.err, "result": res.ops[0] };
    },
    get: async (db, badgeURL2) => {
        const res = await db.collection(collectionName).find({ badgeURL: { $eq: badgeURL2 } }).toArray();
        return { "err": res.err, "result": res }
    }
}

export default BadgeDataLayer;