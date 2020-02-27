import BadgeService from "../services/badgeService";
import BadgeDataLayer from "../dataLayer/BadgeDataLayer";

const Badge = {
    post: (app, db) => {
        app.post('/badge/upload', async (req, res) => {
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

            const huh = await BadgeDataLayer.put(db, badgeData);

            console.log("Huh indeed!", huh);
            res.send(huh);
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