import joi from 'joi';

export const itemSchema = joi.object({
    title: joi.string().trim().required().max(20),
    imageUrl: joi.string().trim().required().uri(),
    description: joi.string().trim().max(30).required(),
    price: joi.string()
});