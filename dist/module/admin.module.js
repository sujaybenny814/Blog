"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const admin_controller_1 = require("../controller/admin.controller");
const admin_service_1 = require("../service/admin.service");
const user_schema_1 = require("../schema/user.schema");
const admin_schema_1 = require("../schema/admin.schema");
const authentication_service_1 = require("../service/authentication.service");
const auth_module_1 = require("./auth.module");
const category_schema_1 = require("../schema/category.schema");
const blog_schema_1 = require("../schema/blog.schema");
let AdminModule = class AdminModule {
};
AdminModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.User.name, schema: user_schema_1.UserSchema }, { name: admin_schema_1.Admin.name, schema: admin_schema_1.AdminSchema },
                { name: category_schema_1.Category.name, schema: category_schema_1.CategorySchema }, { name: blog_schema_1.Blog.name, schema: blog_schema_1.BlogSchema }
            ]), auth_module_1.AuthModule],
        controllers: [admin_controller_1.AdminController],
        providers: [admin_service_1.AdminService, authentication_service_1.AuthenticationService],
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map