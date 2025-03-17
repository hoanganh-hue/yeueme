"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chat_controller_1 = require("../controllers/chat.controller");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /api/chat/completion:
 *   post:
 *     summary: Generate chat completion
 *     description: Generate a response using ChatGPT API
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - message
 *             properties:
 *               message:
 *                 type: string
 *                 description: The message to generate response for
 *               config:
 *                 type: object
 *                 properties:
 *                   model:
 *                     type: string
 *                     enum: ['gpt-4', 'gpt-4-32k', 'gpt-3.5-turbo', 'gpt-3.5-turbo-16k']
 *                   temperature:
 *                     type: number
 *                   max_tokens:
 *                     type: number
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
router.post('/completion', chat_controller_1.chatCompletion);
exports.default = router;
//# sourceMappingURL=chatRoutes.js.map