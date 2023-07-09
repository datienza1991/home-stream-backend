import { Test, TestingModule } from '@nestjs/testing';
import { VideosController } from './videos.controller';
import { fakeVideoRepositoryProvider } from '../shared/fake-video-repository.provider';
import {
  fakeVideoMock,
  fakeVideoServiceProvider,
} from '../shared/fake-video-service.provider';

describe('VideosController', () => {
  let controller: VideosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VideosController],
      providers: [fakeVideoRepositoryProvider, fakeVideoServiceProvider],
    }).compile();

    controller = module.get<VideosController>(VideosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be find All', () => {
    const spy = jest.spyOn(fakeVideoMock, 'findAll');

    controller.findAll();
    expect(spy).toBeCalled();
  });
});
