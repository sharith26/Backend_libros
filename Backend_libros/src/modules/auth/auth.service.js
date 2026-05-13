"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const auth_repository_1 = require("./auth.repository");
const bcrypt_1 = require("../../libs/bcrypt");
const jwt_1 = require("../../libs/jwt");
class AuthService {
    constructor() {
        this.repository = new auth_repository_1.AuthRepository();
    }
    register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const exists = yield this.repository.findEmail(user.email);
            if (exists) {
                throw new Error('el usuario ya existe');
            }
            const hashedPassword = yield (0, bcrypt_1.hashPassword)(user.password);
            user.password = hashedPassword;
            user.role = 'user';
            const result = yield this.repository.create(user);
            const token = (0, jwt_1.signToken)({
                sub: result._id.toString(),
                email: result.email,
                role: result.role
            });
            return {
                user: {
                    id: result._id,
                    name: result.name,
                    email: result.email,
                    role: result.role
                },
                token,
            };
        });
    }
    login(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.repository.findEmail(data.email);
            if (!user) {
                throw new Error('Usuario no existe');
            }
            const isValidPassword = yield (0, bcrypt_1.comparePassword)(data.password, user.password);
            if (!isValidPassword) {
                throw new Error('Credenciales son invalidas');
            }
            const token = (0, jwt_1.signToken)({
                sub: user._id.toString(),
                email: user.email,
                role: user.role
            });
            return {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                },
                token,
            };
        });
    }
}
exports.AuthService = AuthService;
