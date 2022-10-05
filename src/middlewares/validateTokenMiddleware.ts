import { Request, Response, NextFunction} from 'express';
import * as usersRepository from '../repositories/usersRepository';
import * as manipulateToken from '../utils/manipulateToken';
import jwt from 'jsonwebtoken';


export async function validateToken(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers.authorization;
    if (!authorization){
        throw {type: 'not-found', message: "no token found in authorization headers"};
    }
    const token = req.headers.authorization?.replace("Bearer ", "");
    jwt.verify(token, process.env.MY_SECRET_KEY, function (err, decoded) {
        if (err) throw {type: 'unauthorized', message: "no token found in authorization headers"};
    });
    const userData: any = manipulateToken.decryptToken(token);
    const findExistingUser = await usersRepository.findByEmail(userData.email);
    if (!findExistingUser) throw {type: 'NotFound', message: "user not found"};
    res.locals.userId = userData.id;
    next();
}
