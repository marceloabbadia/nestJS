import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';
import { HTTP_CODE_METADATA } from '@nestjs/common/constants';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {

    constructor(private readonly coruseService:CoursesService){}

    @Get()
    findAll(){
        return this.coruseService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id:number){
        return this.coruseService.findOne(+id)
    }

    @Post()
    create(@Body() body){
        return this.coruseService.create(body)
    }


    @Put(':id')
    update(@Param('id') id:number, @Body() body){
        return this.coruseService.update(+id, body)
    }

    @HttpCode(204)
    @Delete(':id')
    remove(@Param('id') id:number,){
        return this.coruseService.remove(+id)
    }
    

}
