const fs = require('fs');
const ObjectID = require('mongodb').ObjectID;

const AudioService = {
    configureAudioData: (req) => {
        const newAudio = fs.readFileSync(req.file.path);
        const encAudio = newAudio.toString('base64');
        return {
            description: req.body.description,
            contentType: req.file.mimetype,
            size: req.file.size,
            audio: Buffer.from(encAudio, 'base64')
        };
    },
    generateIdObjectForMongoSearch: (id) => {
        return {
            '_id': new ObjectID(id)
        };
    }
}
export default AudioService;