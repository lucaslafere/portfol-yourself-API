import supertest from "supertest";
import app from "../../src/app";
import { prisma } from "../../src/database";
import _userFactory from '../factories/userFactory'

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "users" RESTART IDENTITY CASCADE`;
  });

describe('Testa POST "/sign-up"', () => {
    it("Deve retornar 201 ao criar conta corretamente", async () => {
        const user = await _userFactory({});
        const result = await supertest(app).post('/sign-up').send(user);

        const createdUser = await prisma.users.findUnique({
          where: {email: user.email}
        })
        expect(result.status).toBe(201);
        expect(createdUser).not.toBeNull();
    });
    it('Deve retornar 409 ao tentar cadastrar um usuario que ja exista', async () => {
      const user = await _userFactory({persist: true})
      const result = await supertest(app).post('/sign-up').send({...user, confirmPassword: user.password})
      expect(result.status).toBe(409)
  })
  it('Deve retornar 422 ao tentar cadastrar com body errado', async () => {
      const user = await _userFactory({});
      delete user.email;
      const result = await supertest(app).post('/sign-up').send(user);
      expect(result.status).toBe(422);
  })
})
describe('Testa POST /sign-in', () => {
  it('Deve retornar 200 caso haja login, e retornar um token', async () => {
      const user = await _userFactory({persist: true})
      const result = await supertest(app).post('/sign-in').send(user);
      expect(result.status).toBe(200);
      expect(result.body).toBeInstanceOf(Object);
  });
  it('Deve retornar 401 caso envie um body com credenciais erradas', async () => {
      const result = await supertest(app).post('/sign-in').send({email: "hfgkohgfkoh@gmail.com", password: "hdheyhfgdhhf"});
      expect(result.status).toBe(401);
  })
})

  afterAll(async () => {
    await prisma.$disconnect();
  });