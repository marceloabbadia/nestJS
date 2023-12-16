import { DataSource } from "typeorm";
import { dataSourceOptions } from "./database.module"
import { CreateCourseTable1702671740999 } from "src/migrations/1702671740999-CreateCourseTable";
import { CreateTagsTable1702680744057 } from "src/migrations/1702680744057-CreateTagsTable";
import { CreateCoursesTagsTable1702684070389 } from "src/migrations/1702684070389-CreateCoursesTagsTable";
import { AddCoursesIdToCoursesTagsTable1702687841729 } from "src/migrations/1702687841729-AddCoursesIdToCoursesTagsTable";

export const dataSource = new DataSource({
    ...dataSourceOptions,
    synchronize: false,
    migrations: [CreateCourseTable1702671740999, CreateTagsTable1702680744057, CreateCoursesTagsTable1702684070389, AddCoursesIdToCoursesTagsTable1702687841729],
})