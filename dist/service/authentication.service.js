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
exports.AuthenticationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../schema/user.schema");
const admin_schema_1 = require("../schema/admin.schema");
const bcrypt = require("bcrypt");
const auth_service_1 = require("../service/auth.service");
let AuthenticationService = class AuthenticationService {
    constructor(userModel, authService, adminModel) {
        this.userModel = userModel;
        this.authService = authService;
        this.adminModel = adminModel;
    }
    signUp(req, res) {
        try {
            const { name, email, password } = req.body;
            this.userModel.findOne({ email, status: "active" }, async (err, userDetails) => {
                if (err)
                    return res.status(500).json({ status: false, message: "Internal server error" });
                else if (userDetails)
                    return res.status(400).json({ status: false, message: "Email already registered" });
                else {
                    const saltOrRounds = 10;
                    const passwordHash = await bcrypt.hash(password, saltOrRounds);
                    let userData = { name, email, password: passwordHash };
                    this.userModel.create(userData, (err, createdUserData) => {
                        if (err)
                            return res.status(400).json({ status: false, message: "Failed to create user" });
                        else {
                            delete createdUserData.password;
                            return res.status(200).json({ status: true, payload: createdUserData });
                        }
                    });
                }
            });
        }
        catch (error) {
            res.status(500).json({ status: false, message: "Internal server error" });
        }
    }
    async signIn(req, res, role) {
        try {
            let model = this.userModel;
            if (role == "admin") {
                model = this.adminModel;
                await model.create({ name: "admin" }, (err, data) => {
                    if (err)
                        console.error("data");
                });
            }
            const { email, password } = req.body;
            model.findOne({ email, status: "active" }, async (err, userDetails) => {
                if (err || !userDetails)
                    return res.status(404).json({ status: false, message: "No email found" });
                else {
                    let hashPassword = userDetails.password;
                    let status = await bcrypt.compare(password, hashPassword);
                    if (status) {
                        const { _id } = userDetails;
                        let userData = { _id, email, role };
                        let token = await this.authService.createToken(userData);
                        userData.token = token;
                        return res.status(200).json({ status: true, payload: userData });
                    }
                    else
                        return res.status(401).json({ status: false, message: "Enter password is wrong" });
                }
            });
        }
        catch (error) {
            res.status(500).json({ status: false, message: "Internal server error" });
        }
    }
};
AuthenticationService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(user_schema_1.User.name)),
    __param(2, mongoose_1.InjectModel(admin_schema_1.Admin.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        auth_service_1.AuthService, mongoose_2.Model])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map