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
exports.UpdateBlog = exports.DeleteBlog = exports.CreateBlog = exports.UserSignUp = exports.UserSignIn = void 0;
const class_validator_1 = require("class-validator");
class UserSignIn {
}
__decorate([
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], UserSignIn.prototype, "email", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UserSignIn.prototype, "password", void 0);
exports.UserSignIn = UserSignIn;
class UserSignUp {
}
__decorate([
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], UserSignUp.prototype, "email", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UserSignUp.prototype, "password", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UserSignUp.prototype, "name", void 0);
exports.UserSignUp = UserSignUp;
class CreateBlog {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateBlog.prototype, "title", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateBlog.prototype, "description", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateBlog.prototype, "categoryId", void 0);
exports.CreateBlog = CreateBlog;
class DeleteBlog {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], DeleteBlog.prototype, "blogId", void 0);
exports.DeleteBlog = DeleteBlog;
class UpdateBlog {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UpdateBlog.prototype, "blogId", void 0);
exports.UpdateBlog = UpdateBlog;
//# sourceMappingURL=user.validator.js.map