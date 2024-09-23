import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './login.controller';
import { loginservice } from './login.service';

import { mymodule } from './my.module';

@Module({
  imports: [
    JwtModule.register({
      secret: 'yourSecretKey', // Replace with your actual secret key
      signOptions: { expiresIn: '60m' },
    }),
    mymodule, 
  ],
  controllers: [AuthController],
  providers: [loginservice],
})
export class LoginModule {}