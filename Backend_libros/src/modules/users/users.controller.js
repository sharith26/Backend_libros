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
exports.UsersController = void 0;
const users_service_1 = require("./users.service");
class UsersController {
    constructor() {
        this._UsersService = new users_service_1.UsersService();
        this.register = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this._UsersService.register(req.body);
            res.status(201).json(result);
        });
        this.findAllUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this._UsersService.findAllUsers();
            res.status(200).json(result);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = {
                    ok: true,
                    message: `Usuario ${id} actualizado`,
                    data: req.body
                };
                res.status(200).json(result);
            }
            catch (error) {
                res.status(500).json({
                    ok: false,
                    message: "Error al actualizar usuario"
                });
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                res.status(200).json({
                    ok: true,
                    message: `Usuario ${id} eliminado`
                });
            }
            catch (error) {
                res.status(500).json({
                    ok: false,
                    message: "Error al eliminar usuario"
                });
            }
        });
    }
}
exports.UsersController = UsersController;
