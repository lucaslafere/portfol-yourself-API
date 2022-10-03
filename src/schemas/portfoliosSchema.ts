import joi from 'joi';

export const portfolioSchema = joi.object({
    title: joi.string().trim().required().max(20),
    logo: joi.string().trim().required().uri()
});