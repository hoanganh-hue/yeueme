"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const fileController_1 = require("../controllers/fileController");
const validators_1 = require("../validators");
const validators_2 = require("../validators");
const router = express_1.default.Router();
const upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
router.post('/upload', upload.single('file'), fileController_1.uploadFile);
router.get('/list', (0, validators_1.validate)(validators_2.schemas.file.list), fileController_1.listFiles);
router.get('/info/:filename', (0, validators_1.validate)(validators_2.schemas.file.info), fileController_1.getFileInfo);
router.get('/download/:filename', fileController_1.downloadFile);
router.delete('/:filename', fileController_1.deleteFile);
exports.default = router;
//# sourceMappingURL=fileRoutes.js.map