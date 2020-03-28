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
            res.send(returnData);
        });
    }
}

export default Badge;