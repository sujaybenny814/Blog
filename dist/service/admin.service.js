"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const category_schema_1 = require("../schema/category.schema");
const admin_schema_1 = require("../schema/admin.schema");
const blog_schema_1 = require("../schema/blog.schema");
let AdminService = class AdminService {
    constructor(categoryModel, adminModel, blogModel) {
        this.categoryModel = categoryModel;
        this.adminModel = adminModel;
        this.blogModel = blogModel;
    }
    create_category(req, res) {
        try {
            const { name } = req.body;
            const { userId } = req;
            this.adminModel.findOne({ _id: userId, status: "active" }, (err, adminData) => {
                if (err || !adminData)
                    return res.status(401).json({ status: false, message: "Unauthorized" });
                else {
                    this.categoryModel.findOne({ name }, (err, categoryDetails) => {
                        if (err || categoryDetails)
                            return res.status(400).json({ status: false, message: "Category name already exist" });
                        else {
                            this.categoryModel.create({ name }, (err, data) => {
                                if (err)
                                    return res.status(400).json({ status: false, message: "Failed to create category" });
                                else
                                    return res.status(200).json({ status: true, payload: data });
                            });
                        }
                    });
                }
            });
        }
        catch (error) {
            res.status(500).json({ status: false, message: "Internal server error" });
        }
    }
    list_category(req, res) {
        try {
            const { page = 0, limit = 10 } = req.query;
            let skipPage = Number(page) * Number(limit);
            let conditon = {
                $match: {
                    status: "active"
                }
            };
            this.categoryModel.aggregate([conditon, { $project: { name: 1, status: 1 } }], (err, categoryDetails) => {
                if (err || !categoryDetails)
                    return res.status(404).json({ status: false, message: "No category found", devMessage: err });
                else
                    return res.status(200).json({ status: true, payload: categoryDetails });
            });
        }
        catch (error) {
            res.status(500).json({ status: false, message: "Internal server error" });
        }
    }
    get_all_blog(req, res) {
        try {
            const { userId } = req;
            this.adminModel.findOne({ _id: userId, status: "active" }, (err, adminData) => {
                if (err || !adminData)
                    return res.status(401).json({ status: false, message: "Unauthorized" });
                else {
                    let conditon = {
                        $match: {
                            status: "active"
                        }
                    };
                    this.blogModel.aggregate([conditon,
                        {
                            $lookup: {
                                from: "categories",
                                let: {
                                    categoryId: {
                                        $toObjectId: "$categoryId"
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
                                            name: 1,
                                        },
                                    },
                                ],
                                as: "categoryInfo",
                            }
                        },
                        {
                            $project: {
                                _id: 1,
                                status: 1,
                                title: 1,
                                description: 1,
                                categoryName: { $arrayElemAt: ["$categoryInfo", 0] },
                            }
                        },
                        {
                            $project: {
                                _id: 1,
                                status: 1,
                                title: 1,
                                description: 1,
                                categoryName: "$categoryName.name",
                            }
                        }, {
                            $sort: {
                                title: 1
                            }
                        }
                    ], (err, data) => {
                        if (err || !data)
                            return res.status(404).json({ status: false, message: "No blog found" });
                        else
                            return res.status(200).json({ status: true, payload: data });
                    });
                }
            });
        }
        catch (error) {
            res.status(500).json({ status: false, message: "Internal server error" });
        }
    }
    update_category(req, res) {
        try {
            const { categoryId, name } = req.body;
            const { userId } = req;
            this.adminModel.findOne({ _id: userId, status: "active" }, (err, adminData) => {
                if (err || !adminData)
                    return res.status(401).json({ status: false, message: "Unauthorized" });
                else {
                    this.categoryModel.findById({ _id: categoryId }, (err, data) => {
                        if (err || !data)
                            return res.status(400).json({ status: false, message: "No category found" });
                        else {
                            if (data.status == "delete") {
                                return res.status(400).json({ status: false, message: "Category already deleted" });
                            }
                            else {
                                let conditon = {
                                    _id: categoryId,
                                    status: "active"
                                };
                                this.categoryModel.updateOne(conditon, { name: name }, {}, (err, categoryDetails) => {
                                    if (err)
                                        return res.status(400).json({ status: false, message: "Failed to update Category" });
                                    if (categoryDetails.nModified)
                                        res.status(200).json({ status: true, message: "updated successfully", dev: categoryDetails });
                                    else
                                        return res.status(400).json({ status: false, message: "Failed to update Category" });
                                });
                            }
                        }
                    });
                }
            });
        }
        catch (error) {
            res.status(500).json({ status: false, message: "Internal server error" });
        }
    }
    delete_category(req, res) {
        try {
            const { categoryId } = req.body;
            const { userId } = req;
            this.adminModel.findOne({ _id: userId, status: "active" }, (err, adminData) => {
                if (err || !adminData)
                    return res.status(401).json({ status: false, message: "Unauthorized" });
                else {
                    this.categoryModel.findById({ _id: categoryId }, (err, data) => {
                        if (err || !data)
                            return res.status(400).json({ status: false, message: "No category found" });
                        else {
                            if (data.status == "delete") {
                                return res.status(400).json({ status: false, message: "Category already deleted" });
                            }
                            else {
                                let conditon = {
                                    _id: categoryId,
                                    status: "active"
                                };
                                this.categoryModel.updateOne(conditon, { status: "delete" }, {}, (err, categoryDetails) => {
                                    if (err)
                                        return res.status(400).json({ status: false, message: "Failed to delete Category" });
                                    else {
                                        res.status(200).json({ status: true, message: "Deleted successfully" });
                                    }
                                });
                            }
                        }
                    });
                }
            });
        }
        catch (error) {
            res.status(500).json({ status: false, message: "Internal server error" });
        }
    }
};
AdminService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(category_schema_1.Category.name)),
    __param(1, mongoose_1.InjectModel(admin_schema_1.Admin.name)),
    __param(2, mongoose_1.InjectModel(blog_schema_1.Blog.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map