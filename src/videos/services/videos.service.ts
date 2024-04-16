import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Video } from '../model/video.entity';

@Injectable()
export class VideosService {
  constructor(
    @InjectRepository(Video)
    private videosRepository: Repository<Video>,
  ) {}

  public findAll(): Promise<Video[]> {
    return this.videosRepository.find();
  }

  public findOne(id: number): Promise<Video> {
    return this.videosRepository.findOneBy({ id });
  }
}
