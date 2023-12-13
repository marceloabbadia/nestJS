import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDTO } from './dto/create-course.dto';
import { UpdateCourseDTO } from './dto/update-course-dto';

@Controller('courses')
export class CoursesController {

    constructor(private readonly coruseService:CoursesService){}

    @Get()
    findAll(){
        return this.coruseService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id:number){
        return this.coruseService.findOne(id)
    }

    @Post()
    create(@Body() createCourseDTO:CreateCourseDTO){
        return this.coruseService.create(createCourseDTO)
    }


    @Put(':id')
    update(@Param('id') id:number, @Body() updateCourseDTO: UpdateCourseDTO){
        return this.coruseService.update(id, updateCourseDTO)
    }

    @HttpCode(204)
    @Delete(':id')
    remove(@Param('id') id:number,){
        return this.coruseService.remove(id)
    }
    

}
