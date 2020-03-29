import multer from 'multer';
import dotenv from 'dotenv';
dotenv.config();

let multerStorage = "";
//Heroku config has it as 'prod'
if (process.env.NODE_ENV === 'prod') {
    multerStorage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.resolve(__dirname, 'build/uploads'))
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname)
        }
    })
} else if (process.env.NODE_ENV === 'local') {
    multerStorage = multer.diskStorage({
        destination: function (req, res, cb) {
            cb(null, 'uploads/')
        }
    })
}
else {
    multerStorage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.resolve(__dirname, 'build'))
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname)
        }
    })
}


export default multerStorage;
