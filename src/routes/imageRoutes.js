var multer = require('multer')
var upload = multer({ dest: 'uploads/' })

const BadgeImage = {
    post: (app, db) => {
        app.post('/image/upload', async (req, res) => {
            console.log("upload image req: ", req.body); //Getting image becasue I can see it in payload
            // const badgeData = await BadgeService.createBadgeData(req, db);
            // if (badgeData.err) {
            //     res.send(badgeData.err);
            // }
            // const response = await BadgeDataLayer.put(db, badgeData);
            // if (response.err) {
            //     res.send({ "errorMessage": "Error creating badge", "errorMessageLong": "Error stroring badge to database" })
            // } else {
            //     res.send(response);
            // }
            res.send(req.body); //Send image back for yolos
        });
    },

}

export default BadgeImage;