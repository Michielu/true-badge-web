import BadgeService from "../services/badgeService";

const Badge = {
    post: (app, db) => {
        app.post('/badge/upload', function (req, res) {
            console.log("in here");
            const badgeUrl = BadgeService.generateBadgeID(req.body.name, req.body.time);

            const badgeData = {
                name: req.body.name,
                imageKey: req.body.imageID,
                audioKey: req.body.audioID,
                timestamp: req.body.time,
                badgeURL: badgeUrl,
                expirationCode: 1
            }

            //Create Badge key
            // db.collection('labels').insertOne(badge, (err, result) => {
            //     if (err) {
            //         res.send({
            //             'error': 'An error has occurred'
            //         });
            //     } else {
            //         console.log("Results: ", result.ops[0])
            //         res.send(result.ops[0]);
            //     }
            // });

            console.log("Upload indeed!", badgeData);
            res.send("hi");
        });
    },
    get: (app, db) => {
        app.post('/badge/retrieve', function (req, res) {
            console.log("Retrieve indeed!", req);
        });
    },
    test: (app, db) => {
        app.post('/user', function (req, res) {
            console.log("Retrieve indeed!", req.body);
            res.send("received!")
        });
    },
}

//Separate Audio
const Audio = {
    post: (app, db) => {
        app.post('/p/audio', (req, res) => {

        });
    }
}



export default Badge;