const collectionName = 'badge';
const BadgeDataLayer = {
    put: async (db, badgeData) => {
        const res = await db.collection(collectionName).insertOne(badgeData);
        return { "err": res.err, "result": res.ops[0] };
    }
}

export default BadgeDataLayer;