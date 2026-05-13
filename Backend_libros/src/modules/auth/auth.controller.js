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
exports.AuthController = void 0;
class AuthController {
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.status(201).json({ ok: true, msg: "Usuario registrado" });
            }
            catch (e) {
                res.status(400).json({ ok: false });
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.status(200).json({ ok: true, token: "JWT_TOKEN_HERE" });
            }
            catch (e) {
                res.status(401).json({ ok: false });
            }
        });
    }
    getProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.status(200).json({ ok: true, user: { nombre: "Sharith", email: "sharith@gmail.com" } });
            }
            catch (e) {
                res.status(500).json({ ok: false });
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updates = req.body;
                res.status(200).json({ ok: true, msg: "Datos actualizados", updates });
            }
            catch (e) {
                res.status(500).json({ ok: false });
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.status(200).json({ ok: true, msg: "Usuario eliminado correctamente" });
            }
            catch (e) {
                res.status(500).json({ ok: false });
            }
        });
    }
}
exports.AuthController = AuthController;
