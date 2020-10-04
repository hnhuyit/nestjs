import { Controller, Get , Request, Post, UseGuards, Redirect, Param, Render} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';

import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
    ) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  @Render('index.hbs')
  root() {
    return { message: 'Hello World' };
  }

  // @Get(':id')
  // findOne(@Param() params): string {
  //   console.log(params.id);
  //   return `This action returns a #${params.id} cat`;
  // }

  // @Get('ab*cd')
  // @Redirect('https://nestjs.com', 301)
  // findAll() {
  //   return 'This route uses a wildcard';
  // }

  // @Get('/kaka')
  // getIndex(): string {
  // 	return this.appService.getIndex()
  // }
  // @Get('/test')
  // getTest(): string {
  // 	return this.appService.getTest()
  // }

  // @UseGuards(AuthGuard('local'))
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    // return req.user;
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
