"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dataController_1 = require("../controllers/dataController");
const validators_1 = require("../validators");
const validators_2 = require("../validators");
const router = express_1.default.Router();
router.post('/analyze', (0, validators_1.validate)(validators_2.schemas.data.analyze), dataController_1.analyzeFile);
router.post('/scan', (0, validators_1.validate)(validators_2.schemas.data.scan), dataController_1.scanDirectory);
exports.default = router;
//# sourceMappingURL=dataRoutes.js.map