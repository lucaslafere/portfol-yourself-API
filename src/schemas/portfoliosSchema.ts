import joi from 'joi';

export const portfolioSchema = joi.object({
    title: joi.string().trim().required(),
    logo: joi.string().trim().required().uri()
});