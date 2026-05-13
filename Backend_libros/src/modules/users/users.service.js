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
exports.UsersService = void 0;
const users_repository_1 = require("./users.repository");
class UsersService {
    constructor() {
        this.repository = new users_repository_1.UsersRepository();
    }
    register(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const exists = yield this.repository.findByEmail(data.email);
            if (exists) {
                throw new Error('el usuario ya existe');
            }
            return this.repository.create(data);
        });
    }
    findAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.findAllUsers();
        });
    }
}
exports.UsersService = UsersService;
