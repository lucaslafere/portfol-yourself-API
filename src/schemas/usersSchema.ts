import joi from 'joi';
import { UserData } from '../types/userType';

export const signUpSchema = joi.object({
    email: joi.string().email({tlds: { allow: false}}).trim().required(),
    password: joi.string().trim().required(),
    confirmPassword: joi.string().trim().required().valid(joi.ref('password'))
});
export const loginSchema = joi.object<UserData>({
    email: joi.string().email({tlds: { allow: false}}).trim().required(),
    password: joi.string().trim().required(),
});
