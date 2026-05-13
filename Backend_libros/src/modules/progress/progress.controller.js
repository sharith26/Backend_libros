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
exports.ProgressController = void 0;
const progress_service_1 = require("./progress.service");
const service = new progress_service_1.ProgressService();
class ProgressController {
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield service.saveProgress(req.body);
                res.status(200).json(result);
            }
            catch (error) {
                res.status(400).json({
                    message: error.message
                });
            }
        });
    }
    getByUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield service.getUserLibrary(req.params.userId);
                res.status(200).json(result);
            }
            catch (error) {
                res.status(500).json({
                    message: error.message
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                res.status(200).json({
                    ok: true,
                    message: `Progreso ${id} eliminado correctamente`
                });
            }
            catch (error) {
                res.status(500).json({
                    ok: false,
                    message: error.message
                });
            }
        });
    }
}
exports.ProgressController = ProgressController;
