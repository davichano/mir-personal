const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadFolder = path.join(__dirname, '../uploads');

if (!fs.existsSync(uploadFolder)) {
    fs.mkdirSync(uploadFolder, {recursive: true});
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadFolder);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
});

const upload = multer({storage});

module.exports = upload;
