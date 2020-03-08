const fs = require('fs');
const ObjectID = require('mongodb').ObjectID;


const ImageService = {
    configureBadgeData: (req) => {
        const newImg = fs.readFileSync(req.file.path);
        const encImg = newImg.toString('base64');
        return {
            description: req.body.description,
            contentType: req.file.mimetype,
            size: req.file.size,
            img: Buffer.from(encImg, 'base64')
        };
    },
    generateIdObjectForMongoSearch: (id) => {
        return {
            '_id': new ObjectID(id)
        };
    }
}
export default ImageService;