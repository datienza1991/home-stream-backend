import { Controller, Get } from '@nestjs/common';
import { Video } from '../model/video.entity';
import { VideosService } from '../services/videos.service';

@Controller('videos')
export class VideosController {
  constructor(private videosService: VideosService) {}

  @Get()
  public async findAll(): Promise<{ data: Video[] }> {
    return { data: await this.videosService.findAll() };
  }
}
