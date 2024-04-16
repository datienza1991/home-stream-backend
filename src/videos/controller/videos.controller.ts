import { Controller, Get, Param } from '@nestjs/common';
import { VideoRouteParam } from '../model/video-route.param';
import { Video } from '../model/video.entity';
import { VideosService } from '../services/videos.service';

@Controller('videos')
export class VideosController {
  constructor(private videosService: VideosService) {}

  @Get()
  public async findAll(): Promise<{ data: Video[] }> {
    return { data: await this.videosService.findAll() };
  }

  @Get(':id')
  public async findOne(
    @Param() params: VideoRouteParam,
  ): Promise<{ data: Video }> {
    return { data: await this.videosService.findOne(params.id) };
  }
}
