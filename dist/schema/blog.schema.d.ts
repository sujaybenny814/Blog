import { Document } from 'mongoose';
export declare type BlogDocument = Blog & Document;
export declare class Blog {
    title: string;
    status: string;
    description: string;
    categoryId: string;
    userId: string;
}
export declare const BlogSchema: import("mongoose").Schema<Document<Blog, any>, import("mongoose").Model<any, any, any>, undefined>;
