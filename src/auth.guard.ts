import { ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { authconstant } from "./auth.constant";

@Injectable()
    export class Authservice{
    [x: string]: any;
        constructor(private jwtservice:JwtService){}
    
    async canActivate(context:ExecutionContext){
        const request=context.switchToHttp().getRequest();
        const token =this.extractTokenFromHeader(request);
        if(!token){
            throw new UnauthorizedException('No token provided');
            }
            try{
               
                const payload = await this.jwtService.verifyAsync(
                    token,
                    {
                        secret: authconstant.secretKey
                    }
                );
                          }
           
        
    catch(err){
        throw new UnauthorizedException('Invalid token');
    }
    return true
    }
    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
      }
      public async sign(payload){
        return await this.jwtService.sign(payload,authconstant.secretKey)
      }
}