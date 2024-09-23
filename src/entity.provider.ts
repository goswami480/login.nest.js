import { DataSource } from "typeorm";
import { User } from "./app.entity";


export const EntityProvider=[{
    provide:User,
    useFactory:(datasouce:DataSource)=>
        datasouce.getRepository(User),
    inject:["DATA_SOURCE"]
}]