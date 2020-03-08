
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, 'uploads/')
    }
});
const upload = multer({ storage: storage });
const fs = require('fs');
// import Img from '../modals/ImgModal';

import ImageDataLayer from '../dataLayer/ImageDataLayer';

const BadgeImage = {
    post: (app, db) => {
        app.post('/image/upload', upload.single('file'), async (req, res) => {
            // var new_img = new Img;
            // console.log("File is :", req.body, req.file);
            // new_img.img.data = fs.readFileSync(req.file.path)
            // // new_img.img.data = fs.readFileSync(req.body.image)
            // new_img.img.contentType = 'image/jpeg';
            // new_img.save();

            var newImg = fs.readFileSync(req.file.path);
            console.log("req.body", req.file, " body: ", req.body)
            // var newImg = fs.readFileSync(req.body.file);
            // encode the file as a base64 string.
            var encImg = newImg.toString('base64');
            var newItem = {
                description: req.body.description,
                contentType: req.file.mimetype,
                size: req.file.size,
                img: Buffer(encImg, 'base64')
            };
            const response = await ImageDataLayer.put(db, newItem);
            console.log("Response: ", response);
            if (response.err) {
                res.send({ "errorMessage": "Error creating badge", "errorMessageLong": "Error stroring badge to database" })
            } else {
                res.send(response);
            }
            // res.send(req.body); //Send image back for yolos
        });
    },
    get: (app, db) => {
        app.get('/image/:id', async (req, res) => {
            const badgeURL = "5e6418512d49b74310d7168e"; //req.params.id; //TODO this is test
            const response = await ImageDataLayer.get(db, badgeURL);
            console.log("In imageROutes: ", response);
            // res.setHeader('content-type', response.result.contentType);

            // const returnData = BadgeService.formulateBadgeData(response);
            //TODO use imageKey and audioKey to get actual data
            res.send(response);
        });
    },

}

export default BadgeImage;