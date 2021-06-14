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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationController = void 0;
const common_1 = require("@nestjs/common");
const authentication_service_1 = require("../service/authentication.service");
const user_validator_1 = require("../validator/user.validator");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../documentation/user.entity");
let AuthenticationController = class AuthenticationController {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    signUp(userSignUp, request, response) {
        return this.authenticationService.signUp(request, response);
    }
    signIn(userSignIn, request, response) {
        return this.authenticationService.signIn(request, response, "user");
    }
};
__decorate([
    swagger_1.ApiResponse({
        status: 200,
        description: 'The Successfully signUp',
        type: user_entity_1.SignUpD,
    }),
    common_1.Post("signUp"),
    __param(0, common_1.Body()), __param(1, common_1.Req()), __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_validator_1.UserSignUp, Object, Object]),
    __metadata("design:returntype", Object)
], AuthenticationController.prototype, "signUp", null);
__decorate([
    swagger_1.ApiResponse({
        status: 200,
        description: 'The Successfully logined',
        type: user_entity_1.SignInD,
    }),
    common_1.Put("signIn"),
    __param(0, common_1.Body()), __param(1, common_1.Req()), __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_validator_1.UserSignIn, Object, Object]),
    __metadata("design:returntype", Object)
], AuthenticationController.prototype, "signIn", null);
AuthenticationController = __decorate([
    swagger_1.ApiTags('authentication'),
    common_1.Controller("authentication"),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], AuthenticationController);
exports.AuthenticationController = AuthenticationController;
//# sourceMappingURL=authentication.controller.js.map