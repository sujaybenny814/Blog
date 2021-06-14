import { Document } from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User {
    name: string;
    email: string;
    password: string;
    role: string;
    status: string;
}
export declare const UserSchema: import("mongoose").Schema<Document<User, any>, import("mongoose").Model<any, any, any>, undefined>;
