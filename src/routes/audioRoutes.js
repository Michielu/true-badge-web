
import multer from 'multer';
import multerStorage from '../config/multerStorage';

const upload = multer({ storage: multerStorage });

import AudioDataLayer from '../dataLayer/AudioDataLayer';
import AudioService from '../services/audioService';

const BadgeAudio = {
    post: (app, db) => {
        app.post('/audio/upload', upload.single('file'), async (req, res) => {
            const BadgeAudioData = AudioService.configureAudioData(req);
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