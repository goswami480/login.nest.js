import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { AppService } from "./app.service";

export class login{
   
     email: string;
     password: any;
}
@Injectable()
export class loginservice{
    
constructor(private userservice:AppService,
    private readonly jwtService:JwtService){}

 async login(email: string, password: any): Promise<{ access_token: string }> {
   console.log(email)
    const values= await this.userservice.findOne(email)
       if(values?.email !== email){
        throw new UnauthorizedException("invalid email or password ");
    }
   const payload={ EMAIL:email,pass:password}  
   console.log(payload)
   return {  access_token: await this.jwtService.sign(payload),
        }
}





}