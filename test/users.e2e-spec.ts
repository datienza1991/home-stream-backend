import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { UsersModule } from '../src/users/users.module';
import { UsersService } from '../src/users/users.service';
import * as request from 'supertest';
import { User } from '../src/users/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

const object = { id: 1 };
describe('Users', () => {
  let app: INestApplication;
  let usersService = {
    findAll: async () => [{ id: 1 }],
    findOne: (id: number) => object,
  };
  let mockUserRepo = {};
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [UsersModule],
    })
      .overrideProvider(getRepositoryToken(User))
      .useValue(mockUserRepo)
      .overrideProvider(UsersService)
      .useValue(usersService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET users`, async () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect({ data: await usersService.findAll() });
  });

  it(`/GET users/1`, async () => {
    return request(app.getHttpServer())
      .get('/users/1')
      .expect(200)
      .expect({ data: await usersService.findOne(1) });
  });

  afterAll(async () => {
    await app.close();
  });
});
