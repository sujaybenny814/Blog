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
exports.DeleteCategoryD = exports.UpdateCategoryD = exports.CreateCategoryD = exports.SignIn = void 0;
const swagger_1 = require("@nestjs/swagger");
class SignIn {
}
__decorate([
    swagger_1.ApiProperty({ example: "admin@admin.com", description: 'Email to login as admin' }),
    __metadata("design:type", String)
], SignIn.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 'admin@123',
        description: 'Password ',
    }),
    __metadata("design:type", String)
], SignIn.prototype, "password", void 0);
exports.SignIn = SignIn;
class CreateCategoryD {
}
__decorate([
    swagger_1.ApiProperty({ example: "Action", description: 'Create a category.Give category name' }),
    __metadata("design:type", String)
], CreateCategoryD.prototype, "name", void 0);
exports.CreateCategoryD = CreateCategoryD;
class UpdateCategoryD {
}
__decorate([
    swagger_1.ApiProperty({ example: "Category 2", description: 'To update categoryName' }),
    __metadata("design:type", String)
], UpdateCategoryD.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: '',
        description: 'Provide categoryId ',
    }),
    __metadata("design:type", String)
], UpdateCategoryD.prototype, "categoryId", void 0);
exports.UpdateCategoryD = UpdateCategoryD;
class DeleteCategoryD {
}
__decorate([
    swagger_1.ApiProperty({ example: "", description: 'To delete a category' }),
    __metadata("design:type", String)
], DeleteCategoryD.prototype, "categoryId", void 0);
exports.DeleteCategoryD = DeleteCategoryD;
//# sourceMappingURL=admin.entity.js.map