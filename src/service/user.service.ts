import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Blog , BlogDocument} from "../schema/blog.schema"
import {User , UserDocument} from "../schema/user.schema"
import {Category , CategoryDocument} from "../schema/category.schema"




@Injectable()
export class UserService {
    constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Category.name) private CategoryModel: Model<CategoryDocument>,
    ) {}

    create_blog(req,res){
        try{
            const {title,description,categoryId} = req.body
            const {userId} = req
            this.userModel.findOne({_id:userId,status:"active"},async(err,userDetails)=>{
                if(err || !userDetails) return res.status(401).json({status:false,message:"Unauthorized"})
                else{
                    this.CategoryModel.findById({_id:categoryId},(err,categoryData)=>{
                        if(err || !categoryData) return res.status(404).json({status:false,message:"No category found"})
                        else{
                            const {status} =  categoryData
                            if(status =="delete") return res.status(400).json({status:false,message:"Cannot create blog using this category.Category already deleted"})
                            else{
                                let conditon ={ title,status:"active",userId:userId }
                                this.blogModel.findOne(conditon,(err,data)=>{
                                    if(err || data) return res.status(400).json({status:false,message:"Blog Name already exists"}) 
                                    else{
                                        let blogData ={ title,description ,categoryId, userId }
                                        this.blogModel.create(blogData,(err,blogData)=>{
                                            if(err) return res.status(400).json({status:false,message:"Failed to create blog",dev:err}) 
                                            else return res.status(200).json({status:true,payload:blogData}) 
                
                                        })
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


  list_blog(req,res){
      try{
        const {userId} = req
        const condtiton ={
            $match:{ userId ,status:"active"}
        }
        this.blogModel.aggregate([condtiton,{$project:{title:1,description:1,categoryId:1,userId:1,status:1}},
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
    }
    ],(err,data)=>{
            if(err || !data) return res.status(404).json({status:false,message:"No blog found"})
            else
            return res.status(200).json({status:true,payload:data})
        })
      
      }
      catch(error){
      return res.status(500).json({status:false,message:"Internal server error"})
      }

  }

  delete_blog(req,res){
      try{
        const {userId} = req
        const {blogId}= req.body
        this.blogModel.findById({_id:blogId},(err,blogData)=>{
            if(err || !blogData) return res.status(404).json({status:false,message:"No blog found",})
            else{
                const {status} =blogData
                if(status =="delete") return res.status(400).json({status:false,message:"Blog already deleted"})
                if(blogData.userId !=userId) return res.status(403).json({status:false,message:"Can't delete another user blog"})
                else{
                    this.blogModel.updateOne({_id:blogId},{status:"delete"},{},(err,data)=>{
                        if(err || !data.nModified) return res.status(400).json({status:false,message:"Failed to delete the blog"})
                        else
                        return res.status(200).json({status:true,message:"successfully deleted",})
                    })
                }
            }

        })

      }catch(error){
        return res.status(500).json({status:false,message:"Internal server error"})
      }
  }
  update_blog(req,res){
      try{
        const {userId} = req
        const {blogId,title,description}= req.body
        this.blogModel.findById({_id:blogId},(err,blogData)=>{
            if(err || !blogData) return res.status(404).json({status:false,message:"No blog found",})
            else{
                const {status} =blogData
                if(status =="delete") return res.status(400).json({status:false,message:"Blog already deleted.Cannot update"})
                if(blogData.userId !=userId) return res.status(403).json({status:false,message:"Can't delete another user blog"})
                else{
                    let updateCondition ={ }
                    if(title) updateCondition["title"] =title
                    if(description) updateCondition["description"] =description
                    this.blogModel.updateOne({_id:blogId},updateCondition,{},(err,data)=>{
                        if(err || !data.nModified) return res.status(400).json({status:false,message:"Failed to update the blog",dev:err})
                        else
                        return res.status(200).json({status:true,message:"successfully deleted",})
                    })
                }
            }
        })
      }
      catch(error){
        return res.status(500).json({status:false,message:"Internal server error"})
      }
  }
}