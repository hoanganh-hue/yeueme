"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatCompletion = void 0;
const chatgpt_service_1 = require("../services/chatgpt.service");
const chatCompletion = async (req, res, next) => {
    try {
        const { message, config } = req.body;
        if (!message) {
            throw new Error('Message is required');
        }
        // Validate model type
        if (config?.model && !isValidModel(config.model)) {
            throw new Error('Invalid model specified');
        }
        const chatGPTService = new chatgpt_service_1.ChatGPTService();
        const response = await chatGPTService.generateResponse(message, config);
        res.json(response);
    }
    catch (error) {
        next(error);
    }
};
exports.chatCompletion = chatCompletion;
function isValidModel(model) {
    const validModels = ['gpt-4', 'gpt-4-32k', 'gpt-3.5-turbo', 'gpt-3.5-turbo-16k'];
    return validModels.includes(model);
}
//# sourceMappingURL=chat.controller.js.map