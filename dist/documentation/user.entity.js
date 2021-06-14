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
exports.DeleteBlogD = exports.UpdateBlogD = exports.CreateBlogD = exports.SignUpD = exports.SignInD = void 0;
const swagger_1 = require("@nestjs/swagger");
class SignInD {
}
__decorate([
    swagger_1.ApiProperty({ example: "email address", description: 'Email to login as user' }),
    __metadata("design:type", String)
], SignInD.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 'admin@123',
        description: 'Password ',
    }),
    __metadata("design:type", String)
], SignInD.prototype, "password", void 0);
exports.SignInD = SignInD;
class SignUpD {
}
__decorate([
    swagger_1.ApiProperty({ example: "email address", description: 'Email to login as user' }),
    __metadata("design:type", String)
], SignUpD.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 'admin@123',
        description: 'Password ',
    }),
    __metadata("design:type", String)
], SignUpD.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 'John mathew',
        description: 'name of the user ',
    }),
    __metadata("design:type", String)
], SignUpD.prototype, "name", void 0);
exports.SignUpD = SignUpD;
class CreateBlogD {
}
__decorate([
    swagger_1.ApiProperty({ example: "Action", description: 'Create a Blog.Give Blog title' }),
    __metadata("design:type", String)
], CreateBlogD.prototype, "title", void 0);
__decorate([
    swagger_1.ApiProperty({ example: "It is a Action", description: 'Give description for the blog' }),
    __metadata("design:type", String)
], CreateBlogD.prototype, "description", void 0);
__decorate([
    swagger_1.ApiProperty({ example: "", description: 'Give categoryId for creating blog' }),
    __metadata("design:type", String)
], CreateBlogD.prototype, "categoryId", void 0);
exports.CreateBlogD = CreateBlogD;
class UpdateBlogD {
}
__decorate([
    swagger_1.ApiProperty({ example: "", description: 'BlogId to update blog' }),
    __metadata("design:type", String)
], UpdateBlogD.prototype, "blogId", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 'new blog name',
        description: 'update blog name ',
    }),
    __metadata("design:type", String)
], UpdateBlogD.prototype, "title", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 'new blog description',
        description: 'update blog description ',
    }),
    __metadata("design:type", String)
], UpdateBlogD.prototype, "description", void 0);
exports.UpdateBlogD = UpdateBlogD;
class DeleteBlogD {
}
__decorate([
    swagger_1.ApiProperty({ example: "", description: 'To delete a blog' }),
    __metadata("design:type", String)
], DeleteBlogD.prototype, "blogId", void 0);
exports.DeleteBlogD = DeleteBlogD;
//# sourceMappingURL=user.entity.js.map