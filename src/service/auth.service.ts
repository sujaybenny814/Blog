import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ExtractJwt, Strategy } from 'passport-jwt';
import {jwtConstants} from "../constant/auth"

@Injectable()
export class AuthService {

    constructor(private jwtService:JwtService ){}


  createToken(data): string {
    return this.jwtService.sign(data)
  }
  verifyToken(token): Object {
    let response = { status:true}
    try{
      response["data"] =  this.jwtService.verify(token,jwtConstants)
    }
    catch(error){
      response.status = false
      response["data"] = error.message  
    }
    return response
    
  }
}