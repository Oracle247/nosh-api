"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const tslib_1 = require("tslib");
const multer_1 = tslib_1.__importDefault(require("multer"));
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const uploadFilePath = path_1.default.resolve(__dirname, '../../..', 'public/uploads');
const dir = uploadFilePath;
console.log(uploadFilePath);
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        // recursively create multiple directories
        fs_1.default.mkdir(dir, { recursive: true }, err => {
            if (err) {
                throw err;
            }
            cb(null, uploadFilePath);
            console.log('Directory is created.');
        });
    },
    filename: function (req, file, cb) {
        console.log(file);
        cb(null, `${new Date().getTime().toString()}-${file.fieldname}${path_1.default.extname(file.originalname)}`);
    }
});
const upload = (0, multer_1.default)({
    storage: storage, limits: {
        fileSize: 10000000
    }
});
exports.upload = upload;
//# sourceMappingURL=multer.js.map