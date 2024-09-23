import { IsEmail, IsString} from "class-validator"

export class signin{
    @IsEmail()
    email:string;
    @IsString()
    password:string;
}