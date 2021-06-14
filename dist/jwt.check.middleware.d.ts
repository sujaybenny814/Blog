import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from './service/auth.service';
export declare class JwtMiddleware implements NestMiddleware {
    private authService;
    constructor(authService: AuthService);
    use(req: Request, res: Response, next: NextFunction): void;
}
