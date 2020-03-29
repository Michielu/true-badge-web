
import multer from 'multer';
import multerStorage from '../config/multerStorage';

const upload = multer({ storage: multerStorage });

import ImageDataLayer from '../dataLayer/ImageDataLayer';
import ImageService from '../services/imageService';

const BadgeImage = {
    post: (app, db) => {
        app.post('/image/upload', upload.single('file'), async (req, res) => {
            const badgeImageData = ImageService.configureBadgeData(req);
            const response = await ImageDataLayer.put(db, badgeImageData);
            if (response.err) {
                res.send({ "errorMessage": "Error uploading image", "errorMessageLong": "Error uploading image to database" })
            } else {
                res.send(response);
            }
        });
    },
    get: (app, db) => {
        app.get('/image/:id', async (req, res) => {
            const imageID = ImageService.generateIdObjectForMongoSearch(req.params.id);
            const response = await ImageDataLayer.get(db, imageID);
            res.send(response);
        });
    }
}

export default BadgeImage;