import { AuthenticationService } from "../service/authentication.service";
import { Request, Response } from 'express';
import { AdminService } from 'src/service/admin.service';
import { UserSignIn } from 'src/validator/user.validator';
import { UpdateCategory, CreateCategory, DeleteCategory } from 'src/validator/admin.validator';
export declare class AdminController {
    private authenticationService;
    private adminService;
    constructor(authenticationService: AuthenticationService, adminService: AdminService);
    signIn(userSignIn: UserSignIn, request: Request, response: Response): any;
    create_category(createCategory: CreateCategory, request: Request, response: Response): any;
    list_category(request: Request, response: Response): any;
    delete_category(deleteCategory: DeleteCategory, request: Request, response: Response): any;
    update_category(updateCategory: UpdateCategory, request: Request, response: Response): any;
    get_all_blog(request: Request, response: Response): any;
}
