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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../service/user.service");
const user_validator_1 = require("../validator/user.validator");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../documentation/user.entity");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    create_blog(createBlog, request, response) {
        return this.userService.create_blog(request, response);
    }
    list_blog(request, response) {
        return this.userService.list_blog(request, response);
    }
    delete_blog(deleteBlog, request, response) {
        return this.userService.delete_blog(request, response);
    }
    update_blog(updateBlog, request, response) {
        return this.userService.update_blog(request, response);
    }
};
__decorate([
    swagger_1.ApiResponse({
        status: 200,
        description: 'The Successfully created blog',
        type: user_entity_1.CreateBlogD,
    }),
    common_1.Post("create-blog"),
    __param(0, common_1.Body()), __param(1, common_1.Req()), __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_validator_1.CreateBlog, Object, Object]),
    __metadata("design:returntype", Object)
], UserController.prototype, "create_blog", null);
__decorate([
    common_1.Get("list_blog"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], UserController.prototype, "list_blog", null);
__decorate([
    swagger_1.ApiResponse({
        status: 200,
        description: 'The Successfully deleted blog',
        type: user_entity_1.DeleteBlogD,
    }),
    common_1.Delete("delete_blog"),
    __param(0, common_1.Body()), __param(1, common_1.Req()), __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_validator_1.DeleteBlog, Object, Object]),
    __metadata("design:returntype", Object)
], UserController.prototype, "delete_blog", null);
__decorate([
    swagger_1.ApiResponse({
        status: 200,
        description: 'The Successfully updated blog',
        type: user_entity_1.UpdateBlogD,
    }),
    common_1.Put("update_blog"),
    __param(0, common_1.Body()), __param(1, common_1.Req()), __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_validator_1.UpdateBlog, Object, Object]),
    __metadata("design:returntype", Object)
], UserController.prototype, "update_blog", null);
UserController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags('user'),
    common_1.Controller('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=users.controller.js.map