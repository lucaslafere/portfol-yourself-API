import { Request, Response } from 'express';
import { signUpSchema, loginSchema } from '../schemas/usersSchema';
import * as usersService from '../services/usersService';
import { UserData } from '../types/userType';
import * as manipulateToken from '../utils/manipulateToken';


export async function createUser (req: Request, res: Response){
    const userData: UserData = req.body;
    const { error } = signUpSchema.validate(userData);
    if (error) throw {type: 'wrong-body-format', message: error.message};
    await usersService.createUser(userData);
    return res.status(201).send("Created");
}

export async function login (req: Request, res: Response){
    const userData: UserData = req.body;
    const { error } = loginSchema.validate(userData);
    if (error) throw {type: 'wrong-body-format', message: error.message};
    const token = await usersService.login(userData);
    const getUserDataFromToken: any = manipulateToken.decryptToken(token)
    const userId = getUserDataFromToken.id;
    return res.status(200).send({message: "Logged in", token, userId});
}