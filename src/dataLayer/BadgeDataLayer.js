const collectionName = 'badge';
const BadgeDataLayer = {
    put: async (db, badgeData) => {
        console.log("Badge Data is :", badgeData);
        const res = await db.collection(collectionName).insertOne(badgeData);
        // return { "err": res.err, "result": res.result };
        return { "err": res.err, "result": res.result };

        //  (err, result) => {
        //     if (err) {
        //         return ({
        //             'error': 'An error has occurred'
        //         });
        //     } else {
        //         console.log("Result: ", result.ops[0])
        //         return (result.ops[0]);
        //     }
        // });
    }
}

export default BadgeDataLayer;