import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async getAll() {
    return { data: await this.userService.findAll() };
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return { data: await this.userService.findOne(parseInt(id)) };
  }
}
