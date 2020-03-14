
import multer from 'multer';
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, 'uploads/')
    }
});
const upload = multer({ storage: storage });

import AudioDataLayer from '../dataLayer/AudioDataLayer';
import AudioService from '../services/audioService';

const BadgeAudio = {
    post: (app, db) => {
        app.post('/audio/upload', upload.single('file'), async (req, res) => {
            const BadgeAudioData = AudioService.configureAudioData(req);
            console.log("badgeAudio: ", BadgeAudioData)
            const response = await AudioDataLayer.put(db, BadgeAudioData);
            if (response.err) {
                res.send({ "errorMessage": "Error uploading image", "errorMessageLong": "Error uploading image to database" })
            } else {
                res.send(response);
            }
        });
    },
    get: (app, db) => {
        app.get('/audio/:id', async (req, res) => {
            const imageID = AudioService.generateIdObjectForMongoSearch(req.params.id);
            const response = await AudioDataLayer.get(db, imageID);
            res.send(response);
        });
    }
}

export default BadgeAudio;