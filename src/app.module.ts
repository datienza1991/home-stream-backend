import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataSourceOptions } from './database/data-source';
import { UsersModule } from './users/users.module';
import { VideosModule } from './videos/videos.module';

const modules = [UsersModule, VideosModule];
@Module({
  imports: [...modules, TypeOrmModule.forRoot(dataSourceOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
