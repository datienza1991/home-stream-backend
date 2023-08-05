import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

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
