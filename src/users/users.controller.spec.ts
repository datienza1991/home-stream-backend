import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

const mockRepository = {};
const mockService = { findOne: jest.fn() };
describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        { provide: UsersService, useValue: mockService },
        { provide: getRepositoryToken(User), useValue: mockRepository },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be getOne', () => {
    const id = '1';
    const spy = jest.spyOn(mockService, 'findOne');

    controller.getOne(id);
    expect(spy).toHaveBeenCalledWith(parseInt(id));
  });
});
