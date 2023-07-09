import { getRepositoryToken } from '@nestjs/typeorm';
import { Video } from '../model/video.entity';

export const fakeVideoRepositoryProvider = {
  provide: getRepositoryToken(Video),
  useValue: {},
};
