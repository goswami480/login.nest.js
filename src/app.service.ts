import { Inject, Injectable } from '@nestjs/common';
import { User } from './app.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(@Inject(User) private readonly userRepository: Repository<User>) {}
   
  async create(createUserDto: User): Promise<User> {
      const newUser = this.userRepository.create(createUserDto);
      return this.userRepository.save(newUser);
    }
  async adduser(user:User):Promise<User>{
      return this.userRepository.save(user);
  }

  async addAdmin(payload:any){
    try {
      console.log("control reached :::::::::::::::: ",payload);
      payload.role=1;
      const res = await  this.userRepository.save(payload);
      console.log("values ::::::::::::::: ",res);
      return {
        error:false,
        data : res,
        message : "Admin added successfully."
      }
    } catch (error) {
      return{
        error : true,
        message : error.message
      }
    }
  }

  async findOne(email:string):Promise<User>{
    return this.userRepository.findOne({where:{email}})
  }
  

}
