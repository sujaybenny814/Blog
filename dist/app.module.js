"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const authentication_module_1 = require("./module/authentication.module");
const admin_module_1 = require("./module/admin.module");
const jwt_check_middleware_1 = require("./jwt.check.middleware");
const auth_module_1 = require("./module/auth.module");
const user_module_1 = require("./module/user.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(jwt_check_middleware_1.JwtMiddleware)
            .exclude({ path: 'admin/signIn', method: common_1.RequestMethod.PUT })
            .forRoutes("admin", "user");
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forRoot('mongodb://localhost/nest'), authentication_module_1.AuthenticationModule, admin_module_1.AdminModule, auth_module_1.AuthModule, user_module_1.UserModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map