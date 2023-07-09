import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './user.entity';

const mockRepository = { findOneBy: jest.fn().mockResolvedValue({} as User) };
describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: getRepositoryToken(User), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a user', () => {
    const id = 1;
    const findOne = jest.spyOn(mockRepository, 'findOneBy');
    const result = service.findOne(id);

    expect(result).not.toBeUndefined();
    expect(findOne).toHaveBeenCalledWith({ id });
  });
});
