import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {User , UserDocument} from "../schema/user.schema"
import {Admin,AdminDocument} from "../schema/admin.schema"
import * as bcrypt from 'bcrypt';
import {AuthService} from "../service/auth.service"

@Injectable()
export class AuthenticationService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
  private authService:AuthService,@InjectModel(Admin.name) private adminModel: Model<AdminDocument>
  ) {}
  signUp(req,res): any {
    try{
      const {name,email,password} = req.body
      this.userModel.findOne({email,status:"active"},async(err,userDetails)=>{
          if(err) return  res.status(500).json({status:false,message:"Internal server error"})
          else if(userDetails) return   res.status(400).json({status:false,message:"Email already registered"})
          else{ 
                  const saltOrRounds = 10;
                  const passwordHash = await bcrypt.hash(password, saltOrRounds);     
                  let userData ={name,email,password:passwordHash}
                  this.userModel.create(userData,(err,createdUserData)=>{
                      if(err) return res.status(400).json({status:false,message:"Failed to create user"})
                      else{
                          delete createdUserData.password // to delete password
                          return  res.status(200).json({status:true,payload:createdUserData})
                      }
                  })
          }
      })
  }
  catch(error){
    res.status(500).json({status:false,message:"Internal server error"})
  }
  }

  async signIn(req,res,role) {
               try{
                let model = this.userModel
                if(role =="admin") {
                    model =this.adminModel
                   await model.create({name:"admin"},(err,data)=>{
                        if(err) console.error("data")
                    })
                }
                   const {email,password} = req.body
                   model.findOne({email,status:"active"},async(err,userDetails)=>{
                       if(err || !userDetails) return res.status(404).json({status:false,message:"No email found"})
                       else{
                           let hashPassword = userDetails.password
                           let status = await  bcrypt.compare(password, hashPassword);
                           if(status){
                               const {_id } =userDetails
                               let userData:any = {_id,email,role}
                               let token = await this.authService.createToken(userData)
                               userData.token =token
                               return  res.status(200).json({status:true,payload:userData})
                           } 
                           else
                           return res.status(401).json({status:false,message:"Enter password is wrong"})
                       }
                   })
               }
               catch(error){
                res.status(500).json({status:false,message:"Internal server error"})
               }
           
  }


}
