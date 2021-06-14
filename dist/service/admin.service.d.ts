import { Model } from 'mongoose';
import { CategoryDocument } from "../schema/category.schema";
import { AdminDocument } from "../schema/admin.schema";
import { BlogDocument } from "../schema/blog.schema";
export declare class AdminService {
    private categoryModel;
    private adminModel;
    private blogModel;
    constructor(categoryModel: Model<CategoryDocument>, adminModel: Model<AdminDocument>, blogModel: Model<BlogDocument>);
    create_category(req: any, res: any): any;
    list_category(req: any, res: any): any;
    get_all_blog(req: any, res: any): void;
    update_category(req: any, res: any): any;
    delete_category(req: any, res: any): any;
}
