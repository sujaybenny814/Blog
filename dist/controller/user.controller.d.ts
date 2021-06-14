import { UserService } from 'src/service/user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    create_blog(request: Request, response: Response): any;
}
