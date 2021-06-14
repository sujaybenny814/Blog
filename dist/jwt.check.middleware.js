"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtMiddleware = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./service/auth.service");
let JwtMiddleware = class JwtMiddleware {
    constructor(authService) {
        this.authService = authService;
    }
    use(req, res, next) {
        let token = req.headers && req.headers.authorization && req.headers.authorization.split("Bearer")[1].trim();
        try {
            const jwtToken = this.authService.verifyToken(token);
            if (jwtToken["status"]) {
                req["email"] = jwtToken["data"].email;
                req["role"] = jwtToken["data"].role;
                req["userId"] = jwtToken["data"]._id;
                next();
            }
            else {
                res.status(401).json({ status: false, message: jwtToken["data"] });
            }
        }
        catch (error) {
            res.status(401).json({ status: false, message: "Unauthorized" });
        }
    }
};
JwtMiddleware = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], JwtMiddleware);
exports.JwtMiddleware = JwtMiddleware;
//# sourceMappingURL=jwt.check.middleware.js.map