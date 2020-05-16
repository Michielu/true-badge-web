
import multer from 'multer';
import multerStorage from '../config/multerStorage';
import AudioDataLayer from '../dataLayer/AudioDataLayer';
import AudioService from '../services/audioService';

const upload = multer({ storage: multerStorage });

const BadgeAudio = {
    post: (app, db) => {
        app.post('/audio/upload', upload.single('file'), async (req, res) => {
            try {
                const badgeAudioData = AudioService.configureAudioData(req);
                const response = await AudioDataLayer.put(db, badgeAudioData);
                if (response.err) {
                    res.send({ "errorMessage": "Error uploading audio", "errorMessageLong": "Error uploading audio to database" })
                } else {
                    res.send(response);
                }
            } catch{
                res.send({ "errorMessage": "Error uploading audio", "errorMessageLong": "Error uploading audio" })
            }
        });
    },
    get: (app, db) => {
        app.get('/audio/:id', async (req, res) => {
            try {

                const audioId = AudioService.generateIdObjectForMongoSearch(req.params.id);
                const response = await AudioDataLayer.get(db, audioId);
                res.send(response);
            } catch{
                res.send({
                    "errorMessage": "Error retrieving audio",
                    "errorMessageLong": "Error retrieving audio"
                });
            }
        });
    }
}

export default BadgeAudio;