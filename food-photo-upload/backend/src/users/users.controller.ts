import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post('/')
  // create(@Body() userData: any) {
  //   return this.usersService.createUser(
  //     userData.username,
  //     userData.password,
  //     userData.email,
  //   );
  // }

  @Get('/')
  @UseGuards(AuthenticatedGuard)
  self(@Request() req) {
    return req.user;
  }

  @Put('/login')
  @UseGuards(LocalAuthGuard)
  login(@Request() req) {
    return req.user;
  }

  @Put('/logout')
  logout(@Request() req) {
    req.logOut();
    req.session.cookie.maxAge = 0;
  }
}
