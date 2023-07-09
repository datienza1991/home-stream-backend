import { Module } from '@nestjs/common';
import { VideosService } from './services/videos.service';
import { VideosController } from './controller/videos.controller';

@Module({
  providers: [VideosService],
  controllers: [VideosController],
})
export class VideosModule {}
