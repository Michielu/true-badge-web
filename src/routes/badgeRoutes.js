import BadgeService from "../services/badgeService";
import BadgeDataLayer from "../dataLayer/BadgeDataLayer";

const Badge = {
    post: (app, db) => {
        app.post('/badge/upload', async (req, res) => {
            const badgeData = BadgeService.createBadgeData(req);
            const response = await BadgeDataLayer.put(db, badgeData);
            if (response.err) {
                res.send({ "errorMessage": "Error creating badge" })
            } else {
                res.send(response);
            }
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