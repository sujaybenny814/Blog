import { Body,Controller, Delete, Get, Post, Put, Req, Res } from '@nestjs/common';
import {AuthenticationService} from "../service/authentication.service"
import { Request,Response } from 'express';
import { AdminService } from 'src/service/admin.service';
import { UserSignIn } from 'src/validator/user.validator';
import { UpdateCategory,CreateCategory,DeleteCategory } from 'src/validator/admin.validator';
import {ApiBearerAuth,ApiOperation,ApiResponse,ApiTags,} from '@nestjs/swagger';
import {SignIn,CreateCategoryD,UpdateCategoryD,DeleteCategoryD} from "../documentation/admin.entity"

@ApiBearerAuth()
@ApiTags('admin')
@Controller("admin")
    export class AdminController{
        constructor(private  authenticationService:AuthenticationService,private adminService:AdminService){
        } 
        @ApiResponse({
            status: 200,
            description: 'The Successfully logined',
            type: SignIn,
          })          
        @Put("signIn")
        signIn(@Body() userSignIn: UserSignIn,@Req() request: Request,@Res() response :Response):any{
            return this.authenticationService.signIn(request,response,"admin")
        }
        @ApiResponse({
            status: 200,
            description: 'The Successfully created category',
            type: CreateCategoryD,
          })    
        @Post("create-category")
        create_category(@Body() createCategory: CreateCategory,@Req() request: Request,@Res() response :Response):any{
            return this.adminService.create_category(request,response)
        }
        @ApiResponse({
            status: 200,
            description: 'The Successfully listed category'
          })  
        @Get("list_category")
        list_category(@Req() request: Request,@Res() response :Response):any{
            return this.adminService.list_category(request,response)
        }
        @ApiResponse({
            status: 200,
            description: 'The Successfully deleted category',
            type: DeleteCategoryD,
          })  
        @Delete("delete_category")
        delete_category(@Body() deleteCategory: DeleteCategory,@Req() request: Request,@Res() response :Response):any{
            return this.adminService.delete_category(request,response)
        }
        @ApiResponse({
            status: 200,
            description: 'The Successfully updated category',
            type: UpdateCategoryD,
          })  
        @Put("update_category")
        update_category(@Body() updateCategory: UpdateCategory,@Req() request: Request,@Res() response :Response):any{
            return this.adminService.update_category(request,response)
        }
        @ApiResponse({
            status: 200,
            description: 'The Successfully fetch all blog',
          })  
        @Get("get_all_blog")
        get_all_blog(@Req() request: Request,@Res() response :Response):any{
            return this.adminService.get_all_blog(request,response)
        }
    
} 