import {  Body, Controller, Delete, Get, Post, Put, Req, Res } from '@nestjs/common';
import { UserService } from 'src/service/user.service';
import { Request,Response } from 'express';
import { CreateBlog,DeleteBlog,UpdateBlog } from 'src/validator/user.validator';
import {ApiBearerAuth,ApiOperation,ApiResponse,ApiTags,} from '@nestjs/swagger';
import {DeleteBlogD,UpdateBlogD,CreateBlogD} from "../documentation/user.entity"
@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private userService:UserService){
    } 
    @ApiResponse({
        status: 200,
        description: 'The Successfully created blog',
        type: CreateBlogD,
      }) 
    @Post("create-blog")
    create_blog(@Body() createBlog: CreateBlog,@Req() request: Request,@Res() response :Response):any{
        return this.userService.create_blog(request,response)
    }
    @Get("list_blog")
    list_blog(@Req() request: Request,@Res() response :Response):any{
        return this.userService.list_blog(request,response)
    }
    @ApiResponse({
        status: 200,
        description: 'The Successfully deleted blog',
        type: DeleteBlogD,
      }) 
    @Delete("delete_blog")
    delete_blog(@Body() deleteBlog: DeleteBlog,@Req() request: Request,@Res() response :Response):any{
        return this.userService.delete_blog(request,response)
    }
    @ApiResponse({
        status: 200,
        description: 'The Successfully updated blog',
        type: UpdateBlogD,
      }) 
    @Put("update_blog")
    update_blog(@Body() updateBlog: UpdateBlog,@Req() request: Request,@Res() response :Response):any{
        return this.userService.update_blog(request,response)
    }
}
