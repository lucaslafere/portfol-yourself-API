import { Request, Response, NextFunction} from 'express';
import * as usersRepository from '../repositories/usersRepository';
import * as manipulateToken from '../utils/manipulateToken';

export async function validateToken(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) throw {type: 'Generic', message: "no token found in authorization headers"};
    const userData: any = manipulateToken.decryptToken(token);
    const findExistingUser = await usersRepository.findByEmail(userData.email);
    if (!findExistingUser) throw {type: 'NotFound', message: "user not found"};
    res.locals.userId = userData.id;
    next();
}

export async function allowNoToken (req: Request, res: Response, next: NextFunction){
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) {
        next();
    }
    else {
        const userData: any = manipulateToken.decryptToken(token);
    const findExistingUser = await usersRepository.findByEmail(userData.email);
    if (!findExistingUser) throw {type: 'NotFound', message: "user not found"};
    res.locals.userId = userData.id;
    res.locals.token = token;
    next();
    }
}