"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommandHistory = exports.executeCommand = void 0;
const child_process_1 = require("child_process");
const util_1 = require("util");
const config_1 = __importDefault(require("../../config"));
const winston_1 = __importDefault(require("winston"));
const execAsync = (0, util_1.promisify)(child_process_1.exec);
const logger = winston_1.default.createLogger({
    level: config_1.default.logger.level,
    format: winston_1.default.format.combine(winston_1.default.format.timestamp(), winston_1.default.format.json()),
    transports: [
        new winston_1.default.transports.File({
            filename: `${config_1.default.storage.logsDir}/commands.log`
        })
    ]
});
const executeCommand = async (req, res, next) => {
    try {
        const { command, timeout = 30000 } = req.body;
        if (!command) {
            throw new Error('Command is required');
        }
        // Log command execution
        logger.info(`Executing command: ${command}`);
        const result = await execAsync(command, {
            timeout,
            cwd: process.cwd()
        });
        const response = {
            stdout: result.stdout,
            stderr: result.stderr,
            exitCode: 0
        };
        // Log successful execution
        logger.info('Command executed successfully', {
            command,
            exitCode: response.exitCode
        });
        res.json(response);
    }
    catch (error) {
        // Log error
        logger.error('Command execution failed', {
            command: req.body.command,
            error: error.message
        });
        const response = {
            stdout: error.stdout || '',
            stderr: error.stderr || error.message,
            exitCode: error.code || 1
        };
        res.status(500).json(response);
    }
};
exports.executeCommand = executeCommand;
const getCommandHistory = async (req, res, next) => {
    try {
        // Implement command history retrieval from logs
        // This is a basic implementation - you might want to use a database instead
        res.json({
            message: 'Command history feature coming soon'
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getCommandHistory = getCommandHistory;
//# sourceMappingURL=command.controller.js.map