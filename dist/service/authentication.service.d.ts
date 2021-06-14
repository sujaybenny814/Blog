import { Model } from 'mongoose';
import { UserDocument } from "../schema/user.schema";
import { AdminDocument } from "../schema/admin.schema";
import { AuthService } from "../service/auth.service";
export declare class AuthenticationService {
    private userModel;
    private authService;
    private adminModel;
    constructor(userModel: Model<UserDocument>, authService: AuthService, adminModel: Model<AdminDocument>);
    signUp(req: any, res: any): any;
    signIn(req: any, res: any, role: any): Promise<void>;
}
