import { faker } from "@faker-js/faker";
import { prisma } from "../../src/database";
import * as passwordEncrypter from "../../src/utils/passwordEncrypter";

interface iNewUser {
  email: string;
  password: string;
  confirmPassword?: string;
}

export default async function _userFactory({
  persist = false,
}): Promise<iNewUser> {
  const password = faker.lorem.words(1);
  const user = {
    email: faker.internet.email(),
    password: password,
    confirmPassword: password,
  };
  if (persist) {
    await prisma.users.create({
      data: {
        email: user.email,
        password: passwordEncrypter.hashedPassword(user.password),
      },
    });
    delete user.confirmPassword;
    return user;
  }
  return user;
  
}
