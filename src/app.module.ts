import { Module } from '@nestjs/common'
import { mymodule } from './my.module';
import { AuthController } from './login.controller';
import { loginservice } from './login.service';
import { LoginModule } from './login.module';

@Module({
  imports: [mymodule,LoginModule],
  
  
})
export class AppModule {}
