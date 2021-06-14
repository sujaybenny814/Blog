import { Body, Controller, Get, Post, Put, Req, Res } from '@nestjs/common';
import {AuthenticationService} from "../service/authentication.service"
import { Request,Response } from 'express';
import { UserSignIn,UserSignUp } from 'src/validator/user.validator';
import {ApiBearerAuth,ApiOperation,ApiResponse,ApiTags,} from '@nestjs/swagger';
import {SignInD,SignUpD} from "../documentation/user.entity"

@ApiTags('authentication')
@Controller("authentication")
    export class AuthenticationController{
        constructor(private  authenticationService:AuthenticationService ){
        }
        @ApiResponse({
            status: 200,
            description: 'The Successfully signUp',
            type: SignUpD,
          }) 
        @Post("signUp")
        signUp(@Body() userSignUp: UserSignUp, @Req() request: Request,@Res() response :Response):any{
            return this.authenticationService.signUp(request,response)
        }
        @ApiResponse({
            status: 200,
            description: 'The Successfully logined',
            type: SignInD,
          }) 
        @Put("signIn")
        signIn(@Body() userSignIn: UserSignIn,@Req() request: Request,@Res() response :Response):any{
            return this.authenticationService.signIn(request,response,"user")
        }
    
} 