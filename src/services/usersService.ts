import * as manipulateToken from "../utils/manipulateToken";
import * as usersRepository from "../repositories/usersRepository";
import * as passwordEncrypter from "../utils/passwordEncrypter";
import { UserData } from "../types/userType";

export async function createUser(UserData: UserData) {
  const findExistingUser = await usersRepository.findByEmail(UserData.email);
  if (findExistingUser)
    throw { type: "conflict", message: "This email is in use" };

  await usersRepository.insert({
    email: UserData.email,
    password: passwordEncrypter.hashedPassword(UserData.password),
  });
  return;
}
export async function login(UserData: UserData) {
  const findExistingUser = await usersRepository.findByEmail(UserData.email);
  if (
    !findExistingUser ||
    !passwordEncrypter.comparePassword(
      UserData.password,
      findExistingUser.password
    )
  )
    throw { type: "unauthorized", message: "Unauthorized" };
  const token = manipulateToken.generateToken(findExistingUser);
  return token;
}
