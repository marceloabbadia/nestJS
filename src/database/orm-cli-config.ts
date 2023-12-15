import { DataSource } from "typeorm";
import { dataSourceOptions } from "./database.module"
import { CreateCourseTable1702671740999 } from "src/migrations/1702671740999-CreateCourseTable";

export const dataSource = new DataSource({
    ...dataSourceOptions,
    synchronize: false,
    migrations: [CreateCourseTable1702671740999],
})