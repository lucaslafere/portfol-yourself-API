import { hashSync, compareSync } from "bcrypt";
import dotenv from 'dotenv';

dotenv.config();

const salt: number = Number(process.env.PASSWORD_SALT) || 12;

export function hashedPassword(password: string){
    return hashSync(password, salt);
}

export function comparePassword(password: string, encryptedPassword: string): boolean {
    return compareSync(password, encryptedPassword);
}