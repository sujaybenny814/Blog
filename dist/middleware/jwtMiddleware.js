"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwt = void 0;
function jwt(req, res, next) {
    console.log(`Request...`);
    next();
}
exports.jwt = jwt;
;
//# sourceMappingURL=jwtMiddleware.js.map