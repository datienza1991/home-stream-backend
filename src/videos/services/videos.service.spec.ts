import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Video } from '../model/video.entity';
import { VideosService } from './videos.service';

const fakeRepository = {
  find: jest.fn().mockResolvedValue([{ id: 1 }] as Video[]),
};
describe('VideosService', () => {
  let service: VideosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VideosService,
        { provide: getRepositoryToken(Video), useValue: fakeRepository },
      ],
    }).compile();

    service = module.get<VideosService>(VideosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return list of users', async () => {
    const find = jest.spyOn(fakeRepository, 'find');
    const result = await service.findAll();

    expect(result).toHaveLength(1);
    expect(find).toBeCalled();
  });
});
