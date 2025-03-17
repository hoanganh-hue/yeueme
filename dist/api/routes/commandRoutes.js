"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const command_controller_1 = require("../controllers/command.controller");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /api/command/execute:
 *   post:
 *     summary: Execute a system command
 *     description: Execute a command on the system and return its output
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - command
 *             properties:
 *               command:
 *                 type: string
 *                 description: The command to execute
 *               timeout:
 *                 type: number
 *                 description: Timeout in milliseconds (default 30000)
 *     responses:
 *       200:
 *         description: Command executed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 stdout:
 *                   type: string
 *                 stderr:
 *                   type: string
 *                 exitCode:
 *                   type: number
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
router.post('/execute', command_controller_1.executeCommand);
/**
 * @swagger
 * /api/command/history:
 *   get:
 *     summary: Get command execution history
 *     description: Retrieve the history of executed commands
 *     responses:
 *       200:
 *         description: Command history retrieved successfully
 *       500:
 *         description: Server error
 */
router.get('/history', command_controller_1.getCommandHistory);
exports.default = router;
//# sourceMappingURL=commandRoutes.js.map