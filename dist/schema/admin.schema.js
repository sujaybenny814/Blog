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
exports.AdminSchema = exports.Admin = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Admin = class Admin {
};
__decorate([
    mongoose_1.Prop({ required: true, default: "ADMIN" }),
    __metadata("design:type", String)
], Admin.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop({ required: true, unique: true, default: "admin@admin.com" }),
    __metadata("design:type", String)
], Admin.prototype, "email", void 0);
__decorate([
    mongoose_1.Prop({ required: true, default: "$2b$10$MNevG6TC4j03YAWUwrSIm.3Qh.qlnr1Y4OPtRgxwpShsppiXS1tmq" }),
    __metadata("design:type", String)
], Admin.prototype, "password", void 0);
__decorate([
    mongoose_1.Prop({ required: true, default: "admin" }),
    __metadata("design:type", String)
], Admin.prototype, "role", void 0);
__decorate([
    mongoose_1.Prop({ required: true, default: "active" }),
    __metadata("design:type", String)
], Admin.prototype, "status", void 0);
Admin = __decorate([
    mongoose_1.Schema()
], Admin);
exports.Admin = Admin;
exports.AdminSchema = mongoose_1.SchemaFactory.createForClass(Admin);
//# sourceMappingURL=admin.schema.js.map