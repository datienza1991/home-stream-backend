import { Module } from '@nestjs/common';
import { VideosService } from './services/videos.service';
import { VideosController } from './controller/videos.controller';
import { Video } from './model/video.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Video])],
  providers: [VideosService],
  controllers: [VideosController],
})
export class VideosModule {}
