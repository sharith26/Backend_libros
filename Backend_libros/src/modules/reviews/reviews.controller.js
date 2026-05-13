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
exports.ReviewController = void 0;
class ReviewController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.status(200).json({ ok: true, data: [] });
            }
            catch (error) {
                res.status(500).json({ ok: false, msg: 'Error al obtener reseñas' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                res.status(201).json({ ok: true, msg: 'Reseña creada', data: body });
            }
            catch (error) {
                res.status(400).json({ ok: false, msg: 'Error al crear' });
            }
        });
    }
    getByBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { bookId } = req.params;
                res.status(200).json({ ok: true, bookId });
            }
            catch (error) {
                res.status(404).json({ ok: false, msg: 'No encontrado' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const body = req.body;
                res.status(200).json({ ok: true, msg: 'Reseña actualizada', id });
            }
            catch (error) {
                res.status(500).json({ ok: false, msg: 'Error al actualizar' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                // Lógica para eliminar de la DB
                res.status(200).json({ ok: true, msg: 'Reseña eliminada' });
            }
            catch (error) {
                res.status(500).json({ ok: false, msg: 'Error al eliminar' });
            }
        });
    }
}
exports.ReviewController = ReviewController;
