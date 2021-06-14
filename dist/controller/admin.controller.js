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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const authentication_service_1 = require("../service/authentication.service");
const admin_service_1 = require("../service/admin.service");
const user_validator_1 = require("../validator/user.validator");
const admin_validator_1 = require("../validator/admin.validator");
const swagger_1 = require("@nestjs/swagger");
const admin_entity_1 = require("../documentation/admin.entity");
let AdminController = class AdminController {
    constructor(authenticationService, adminService) {
        this.authenticationService = authenticationService;
        this.adminService = adminService;
    }
    signIn(userSignIn, request, response) {
        return this.authenticationService.signIn(request, response, "admin");
    }
    create_category(createCategory, request, response) {
        return this.adminService.create_category(request, response);
    }
    list_category(request, response) {
        return this.adminService.list_category(request, response);
    }
    delete_category(deleteCategory, request, response) {
        return this.adminService.delete_category(request, response);
    }
    update_category(updateCategory, request, response) {
        return this.adminService.update_category(request, response);
    }
    get_all_blog(request, response) {
        return this.adminService.get_all_blog(request, response);
    }
};
__decorate([
    swagger_1.ApiResponse({
        status: 200,
        description: 'The Successfully logined',
        type: admin_entity_1.SignIn,
    }),
    common_1.Put("signIn"),
    __param(0, common_1.Body()), __param(1, common_1.Req()), __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_validator_1.UserSignIn, Object, Object]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "signIn", null);
__decorate([
    swagger_1.ApiResponse({
        status: 200,
        description: 'The Successfully created category',
        type: admin_entity_1.CreateCategoryD,
    }),
    common_1.Post("create-category"),
    __param(0, common_1.Body()), __param(1, common_1.Req()), __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_validator_1.CreateCategory, Object, Object]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "create_category", null);
__decorate([
    swagger_1.ApiResponse({
        status: 200,
        description: 'The Successfully listed category'
    }),
    common_1.Get("list_category"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "list_category", null);
__decorate([
    swagger_1.ApiResponse({
        status: 200,
        description: 'The Successfully deleted category',
        type: admin_entity_1.DeleteCategoryD,
    }),
    common_1.Delete("delete_category"),
    __param(0, common_1.Body()), __param(1, common_1.Req()), __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_validator_1.DeleteCategory, Object, Object]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "delete_category", null);
__decorate([
    swagger_1.ApiResponse({
        status: 200,
        description: 'The Successfully updated category',
        type: admin_entity_1.UpdateCategoryD,
    }),
    common_1.Put("update_category"),
    __param(0, common_1.Body()), __param(1, common_1.Req()), __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_validator_1.UpdateCategory, Object, Object]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "update_category", null);
__decorate([
    swagger_1.ApiResponse({
        status: 200,
        description: 'The Successfully fetch all blog',
    }),
    common_1.Get("get_all_blog"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "get_all_blog", null);
AdminController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags('admin'),
    common_1.Controller("admin"),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, admin_service_1.AdminService])
], AdminController);
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map