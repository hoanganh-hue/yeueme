"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const backup_controller_1 = require("../controllers/backup.controller");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /api/backup:
 *   post:
 *     summary: Create a new backup
 *     description: Create a backup of specified directories
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               directories:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: List of directories to backup
 *     responses:
 *       200:
 *         description: Backup created successfully
 *       500:
 *         description: Server error
 */
router.post('/', backup_controller_1.createBackup);
/**
 * @swagger
 * /api/backup:
 *   get:
 *     summary: List all backups
 *     description: Get a list of all available backups
 *     responses:
 *       200:
 *         description: List of backups retrieved successfully
 *       500:
 *         description: Server error
 */
router.get('/', backup_controller_1.listBackups);
/**
 * @swagger
 * /api/backup/{fileName}:
 *   get:
 *     summary: Download a backup
 *     description: Download a specific backup file
 *     parameters:
 *       - in: path
 *         name: fileName
 *         required: true
 *         schema:
 *           type: string
 *         description: Name of the backup file
 *     responses:
 *       200:
 *         description: Backup file downloaded successfully
 *       404:
 *         description: Backup file not found
 *       500:
 *         description: Server error
 */
router.get('/:fileName', backup_controller_1.downloadBackup);
/**
 * @swagger
 * /api/backup/{fileName}:
 *   delete:
 *     summary: Delete a backup
 *     description: Delete a specific backup file
 *     parameters:
 *       - in: path
 *         name: fileName
 *         required: true
 *         schema:
 *           type: string
 *         description: Name of the backup file to delete
 *     responses:
 *       200:
 *         description: Backup deleted successfully
 *       404:
 *         description: Backup file not found
 *       500:
 *         description: Server error
 */
router.delete('/:fileName', backup_controller_1.deleteBackup);
exports.default = router;
//# sourceMappingURL=backupRoutes.js.map