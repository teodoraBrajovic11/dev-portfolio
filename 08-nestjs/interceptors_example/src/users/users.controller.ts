import {
  Controller,
  Get,
  HttpException,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersInterceptor } from './interceptors/users.interceptor';
import { UserErrorInterceptor } from './interceptors/errors.interceptor';

@Controller('api/users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  @UseInterceptors(UsersInterceptor)
  getUsers() {
    console.log('inside');
    return this.userService.getUsers();
  }

  @Post()
  @UseInterceptors(UserErrorInterceptor)
  createUser() {
    throw new HttpException('Bad request', 400);
  }
}
