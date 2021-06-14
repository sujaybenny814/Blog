import { Document } from 'mongoose';
export declare type AdminDocument = Admin & Document;
export declare class Admin {
    name: string;
    email: string;
    password: string;
    role: string;
    status: string;
}
export declare const AdminSchema: import("mongoose").Schema<Document<Admin, any>, import("mongoose").Model<any, any, any>, undefined>;
