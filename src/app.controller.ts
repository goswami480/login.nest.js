import { Controller, Get,Post,Body, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './app.entity';
import { data } from './file.enum';

@Controller("User")
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly appService: AppService) {}

  @Post('add-user')
  createuser(@Body() createUserDTo:User){
      this.appService.adduser(createUserDTo)
      return {message:"added successfully"}
     }

    @Post('add-admin')
    async createAdmin(@Body() body, @Res() res){
      try {
        const result = await this.appService.addAdmin(body);
        if(result.error){
          throw res.message;
        }
        console.log(result,"::::::::::::::::")
        return res.status(201).send({
          message:"Admin added successfully"
        });
      } catch (error) {
        res.status(400).send({
          error : true,
          message : error.message
        })
      }
    }
     

}
