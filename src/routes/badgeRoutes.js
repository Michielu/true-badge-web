import BadgeService from "../services/badgeService";
import BadgeDataLayer from "../dataLayer/BadgeDataLayer";

const Badge = {
    post: (app, db) => {
        app.post('/badge/upload', async (req, res) => {
            const badgeData = await BadgeService.createBadgeData(req, db);
            if (badgeData.err) {
                res.send(badgeData.err);
            }
            const response = await BadgeDataLayer.put(db, badgeData);
            if (response.err) {
                res.send({ "errorMessage": "Error creating badge", "errorMessageLong": "Error stroring badge to database" })
            } else {
                res.send(response);
            }
        });
    },
    get: (app, db) => {
        app.get('/b/:id', async (req, res) => {
            const badgeURL = req.params.id;
            const response = await BadgeDataLayer.get(db, badgeURL);
            const returnData = BadgeService.formulateBadgeData(response);
            //TODO use imageKey and audioKey to get actual data
            res.send(returnData);
        });
    },
    //TODO clean this and fix est
    test: (app, db) => {
        app.post('/user', function (req, res) {
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