import { Model } from 'mongoose';
import { BlogDocument } from "../schema/blog.schema";
import { UserDocument } from "../schema/user.schema";
import { CategoryDocument } from "../schema/category.schema";
export declare class UserService {
    private blogModel;
    private userModel;
    private CategoryModel;
    constructor(blogModel: Model<BlogDocument>, userModel: Model<UserDocument>, CategoryModel: Model<CategoryDocument>);
    create_blog(req: any, res: any): void;
    list_blog(req: any, res: any): any;
    delete_blog(req: any, res: any): any;
    update_blog(req: any, res: any): any;
}
