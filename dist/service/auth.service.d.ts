import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    createToken(data: any): string;
    verifyToken(token: any): Object;
}
