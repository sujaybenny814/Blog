import { UserService } from 'src/service/user.service';
import { Request, Response } from 'express';
import { CreateBlog, DeleteBlog, UpdateBlog } from 'src/validator/user.validator';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    create_blog(createBlog: CreateBlog, request: Request, response: Response): any;
    list_blog(request: Request, response: Response): any;
    delete_blog(deleteBlog: DeleteBlog, request: Request, response: Response): any;
    update_blog(updateBlog: UpdateBlog, request: Request, response: Response): any;
}
