import { Controller } from '@nestjs/common';
import { VideosService } from '../services/videos.service';
import { Video } from '../model/video.entity';

@Controller('videos')
export class VideosController {
  constructor(private videosService: VideosService) {}

  public findAll(): Promise<Video[]> {
    return this.videosService.findAll();
  }
}
