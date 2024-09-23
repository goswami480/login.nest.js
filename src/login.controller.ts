import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards
  } from '@nestjs/common';
  import { Authservice } from './auth.guard';
  import { loginservice } from './login.service';
  
  @Controller('auth')
  export class AuthController {
    constructor(private loginservice: loginservice) {}
  
    @HttpCode(HttpStatus.OK)
    @Post()
    signIn(@Body() signInDto: Record<string, any>) {
      return this.loginservice.login(signInDto.email ,signInDto.password);
    }
  
    @UseGuards(Authservice)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }
  }