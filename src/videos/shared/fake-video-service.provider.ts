import { getRepositoryToken } from '@nestjs/typeorm';
import { Video } from '../model/video.entity';
import { VideosService } from '../services/videos.service';

export const fakeVideoMock = { findAll: jest.fn() };
export const fakeVideoServiceProvider = {
  provide: VideosService,
  useValue: fakeVideoMock,
};
