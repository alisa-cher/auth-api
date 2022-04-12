import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

import dotenv = require('dotenv')
dotenv.config()
console.log(process.env);

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
