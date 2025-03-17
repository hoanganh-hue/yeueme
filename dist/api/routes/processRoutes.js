"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const process_controller_1 = require("../controllers/process.controller");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /api/process:
 *   get:
 *     summary: List all processes
 *     description: Get a list of all running processes with their details
 *     responses:
 *       200:
 *         description: List of processes retrieved successfully
 *       500:
 *         description: Server error
 */
router.get('/', process_controller_1.listProcesses);
/**
 * @swagger
 * /api/process/{pid}:
 *   get:
 *     summary: Get process information
 *     description: Get detailed information about a specific process
 *     parameters:
 *       - in: path
 *         name: pid
 *         required: true
 *         schema:
 *           type: string
 *         description: Process ID
 *     responses:
 *       200:
 *         description: Process information retrieved successfully
 *       404:
 *         description: Process not found
 *       500:
 *         description: Server error
 */
router.get('/:pid', process_controller_1.getProcessInfo);
/**
 * @swagger
 * /api/process/{pid}:
 *   delete:
 *     summary: Kill a process
 *     description: Terminate a specific process by its ID
 *     parameters:
 *       - in: path
 *         name: pid
 *         required: true
 *         schema:
 *           type: string
 *         description: Process ID to kill
 *     responses:
 *       200:
 *         description: Process killed successfully
 *       404:
 *         description: Process not found
 *       500:
 *         description: Server error
 */
router.delete('/:pid', process_controller_1.killProcess);
exports.default = router;
//# sourceMappingURL=processRoutes.js.map