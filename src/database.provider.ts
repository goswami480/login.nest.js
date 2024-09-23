import { User } from "./app.entity";
import { DataSource } from "typeorm";
import { Role } from "./roles.entity";

export const databaseProvider = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const datasource = new DataSource({
        type: 'mysql',
        host: "127.0.0.1",
        port: 3306,
        username: 'root',
        password: 'admin123',
        database: 'my_db',
        connectTimeout: 60 * 60 * 1000,
        entities: [User,Role],
        synchronize: true,
      });
      return datasource.initialize();
    },
  },
];
