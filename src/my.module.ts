import { Module } from "@nestjs/common";
import { databaseProvider } from "./database.provider";
import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { EntityProvider } from "./entity.provider";


@Module({
    
    providers:[...databaseProvider,...EntityProvider,AppService],
    controllers:[AppController],
    exports:[AppService]
})
export  class mymodule{}