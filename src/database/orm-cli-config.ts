import { DataSource } from "typeorm";
import { dataSourceOptions } from "./database.module"
import { CreateCourseTable1702671740999 } from "src/migrations/1702671740999-CreateCourseTable";
import { CreateTagsTable1702680744057 } from "src/migrations/1702680744057-CreateTagsTable";

export const dataSource = new DataSource({
    ...dataSourceOptions,
    synchronize: false,
    migrations: [CreateCourseTable1702671740999, CreateTagsTable1702680744057],
})