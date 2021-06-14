import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from './service/auth.service';


@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(private authService:AuthService){}
  use(req: Request, res: Response, next: NextFunction) {
      let token = req.headers && req.headers.authorization && req.headers.authorization.split("Bearer")[1].trim()
    try{
      const jwtToken = this.authService.verifyToken(token)
      if(jwtToken["status"]){
        req["email"] = jwtToken["data"].email
        req["role"] = jwtToken["data"].role
        req["userId"] = jwtToken["data"]._id
        next();
      }
      else{
        res.status(401).json({status:false,message:jwtToken["data"]})
      }
    }
    catch(error){
      res.status(401).json({status:false,message:"Unauthorized"})
    }
  }
}
