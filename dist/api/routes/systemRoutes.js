"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const systemController_1 = require("../controllers/systemController");
const router = express_1.default.Router();
router.get('/status', systemController_1.getSystemStatus);
router.get('/info', systemController_1.getSystemInfo);
router.get('/metrics', systemController_1.getSystemMetrics);
exports.default = router;
//# sourceMappingURL=systemRoutes.js.map