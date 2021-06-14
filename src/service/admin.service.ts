import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Category,CategoryDocument} from "../schema/category.schema"
import {Admin,AdminDocument} from "../schema/admin.schema"
import {Blog , BlogDocument} from "../schema/blog.schema"



@Injectable()
export class AdminService {
  constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  @InjectModel(Admin.name) private adminModel: Model<AdminDocument>,
  @InjectModel(Blog.name) private blogModel: Model<BlogDocument>

  ) {}
  create_category(req,res):any {
    try{
      const {name} = req.body
      const {userId} = req
        this.adminModel.findOne({_id:userId,status:"active"},(err,adminData)=>{
            if(err || !adminData) return res.status(401).json({status:false,message:"Unauthorized"})
            else{
                this.categoryModel.findOne({name},(err,categoryDetails)=>{
                    if(err || categoryDetails) return res.status(400).json({status:false,message:"Category name already exist"})
                    else{
                      this.categoryModel.create({name},(err,data)=>{
                            if(err)return res.status(400).json({status:false,message:"Failed to create category"})
                            else return res.status(200).json({status:true,payload:data})
                        })
                    }
                })
            }    
        })
    }
    catch(error){
      res.status(500).json({status:false,message:"Internal server error"})

    }
  }
  list_category(req,res):any {
    try{
        const {page = 0 ,limit = 10} = req.query
        let skipPage = Number(page) *  Number(limit)
        let conditon ={
          $match:{
            status:"active"
          }
        }
       this.categoryModel.aggregate([conditon,{$project:{name:1,status:1}}],(err,categoryDetails)=>{
                    if(err || !categoryDetails) return res.status(404).json({status:false,message:"No category found",devMessage:err})
                    else return res.status(200).json({status:true,payload:categoryDetails})                 
                })
            }    
    catch(error){
      res.status(500).json({status:false,message:"Internal server error"})

    }
  } 


  get_all_blog(req,res){
    try{
      const {userId} = req
      this.adminModel.findOne({_id:userId,status:"active"},(err,adminData)=>{
        if(err || !adminData) return res.status(401).json({status:false,message:"Unauthorized"})
        else{
          let conditon ={
            $match:{
              status:"active"
            }
          }
          this.blogModel.aggregate([conditon,
            {
              $lookup:{
                  from: "categories",
                  let: {
                      categoryId: {
                          $toObjectId:"$categoryId"
                                      },
                                  },
                          pipeline: [{
                              $match: {
                                  $expr: {
                                      $eq: ["$_id", '$$categoryId'],
                                  },
                              },
          
                          },
                          {
                              $project: {
                                 name:1,
                                         
                              },
                          },
                      ],
                      as: "categoryInfo",
              }
      },
      {
          $project:{
              _id:1,
              status:1,
              title: 1,
              description:1,
              categoryName:{ $arrayElemAt: [ "$categoryInfo", 0 ]},
          }
      },
      {
          $project:{
              _id:1,
              status:1,
              title: 1,
              description:1,
              categoryName:"$categoryName.name",
          }
      },{
        $sort:{
          title:1
        }
      }
    ],(err,data)=>{
            if(err || !data) return res.status(404).json({status:false,message:"No blog found"})
            else
            return res.status(200).json({status:true,payload:data})
          })
        }
      })
    }
    catch(error){
      res.status(500).json({status:false,message:"Internal server error"})

    }

  }


  update_category(req,res):any {
    try{
      const {categoryId,name} = req.body
      const {userId} = req
      this.adminModel.findOne({_id:userId,status:"active"},(err,adminData)=>{
        if(err || !adminData) return res.status(401).json({status:false,message:"Unauthorized"})
        else{
          this.categoryModel.findById({_id:categoryId},(err,data)=>{
            if(err || !data) return res.status(400).json({status:false,message:"No category found"})
            else{
              if(data.status =="delete"){
                return res.status(400).json({status:false,message:"Category already deleted"})
              } else{
                let conditon ={
                  _id:categoryId,
                  status:"active"
                }
                  this.categoryModel.updateOne(conditon,{name:name},{},(err,categoryDetails)=>{
                      if(err) return res.status(400).json({status:false,message:"Failed to update Category"})
                        if(categoryDetails.nModified)
                        res.status(200).json({status:true,message:"updated successfully",dev:categoryDetails})
                        else
                        return res.status(400).json({status:false,message:"Failed to update Category"})
                  })
              }
            }
          })

       
        }    
    })
            }    
    catch(error){
      res.status(500).json({status:false,message:"Internal server error"})
  
    }
  }

  delete_category(req,res):any {
    try{
      const {categoryId} = req.body
      const {userId} = req
      this.adminModel.findOne({_id:userId,status:"active"},(err,adminData)=>{
        if(err || !adminData) return res.status(401).json({status:false,message:"Unauthorized"})
        else{
       
          this.categoryModel.findById({_id:categoryId},(err,data)=>{
            if(err || !data) return res.status(400).json({status:false,message:"No category found"})
            else{
              if(data.status =="delete"){
                return res.status(400).json({status:false,message:"Category already deleted"})
              } else{
                let conditon ={
                  _id:categoryId,
                  status:"active"
                }
                this.categoryModel.updateOne(conditon,{status:"delete"},{},(err,categoryDetails)=>{
                  if(err) return res.status(400).json({status:false,message:"Failed to delete Category"})
                  else{
                    res.status(200).json({status:true,message:"Deleted successfully"})
                  }
              })
              }
       
            }

          })
         
        }    
    })
            }    
    catch(error){
      res.status(500).json({status:false,message:"Internal server error"})
  
    }
  }


}







