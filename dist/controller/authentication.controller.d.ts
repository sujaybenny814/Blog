import { AuthenticationService } from "../service/authentication.service";
import { Request, Response } from 'express';
import { UserSignIn, UserSignUp } from 'src/validator/user.validator';
export declare class AuthenticationController {
    private authenticationService;
    constructor(authenticationService: AuthenticationService);
    signUp(userSignUp: UserSignUp, request: Request, response: Response): any;
    signIn(userSignIn: UserSignIn, request: Request, response: Response): any;
}
