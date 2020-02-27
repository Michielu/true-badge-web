const collectionName = 'badge';
const BadgeDataLayer = {
    put: (db, badgeData) => {
        console.log("Badge Data is :", badgeData);
        db.collection(collectionName).insertOne(badgeData, (err, result) => {
            if (err) {
                return ({
                    'error': 'An error has occurred'
                });
            } else {
                console.log("Result: ", result.ops[0])
                return (result.ops[0]);
            }
        });
    }
}

export default BadgeDataLayer;