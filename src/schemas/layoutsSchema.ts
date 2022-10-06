import joi from 'joi';

export const layoutSchema = joi.object({
    boxSize: joi.string().trim().required().valid('small', 'medium', 'large'),
    style: joi.string().trim().required().valid('cursive', 'modern', 'altcursive'),
    isStore: joi.boolean().strict().required()
});