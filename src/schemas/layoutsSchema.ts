import joi from 'joi';

export const layoutSchema = joi.object({
    boxSize: joi.string().trim().required().valid('small', 'medium', 'large'),
    style: joi.string().trim().required().valid('classic', 'modern'),
    isStore: joi.boolean().strict().required()
});