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
exports.WishlistController = void 0;
const wishlist_service_1 = require("./wishlist.service");
exports.WishlistController = {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarioId = req.user.id;
                const list = yield wishlist_service_1.WishlistService.getUserWishlist(usuarioId);
                res.json({ ok: true, list });
            }
            catch (error) {
                res.status(500).json({ ok: false, msg: 'Error al obtener la lista' });
            }
        });
    },
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { libroId, prioridad, notas } = req.body;
                if (!libroId) {
                    return res.status(400).json({ ok: false, msg: 'El ID del libro es obligatorio' });
                }
                const usuarioId = req.user.id;
                const item = yield wishlist_service_1.WishlistService.addToWishlist(usuarioId, libroId, prioridad, notas);
                res.status(201).json({ ok: true, item });
            }
            catch (error) {
                res.status(500).json({ ok: false, msg: 'Error al agregar' });
            }
        });
    },
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const { prioridad, notas } = req.body;
                const usuarioId = req.user.id;
                const item = yield wishlist_service_1.WishlistService.updateWishlistItem(usuarioId, id, { prioridad, notas });
                if (!item) {
                    return res.status(404).json({ ok: false, msg: 'No se encontró el ítem para actualizar' });
                }
                res.json({ ok: true, item });
            }
            catch (error) {
                res.status(500).json({ ok: false, msg: 'Error al actualizar' });
            }
        });
    },
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const usuarioId = req.user.id;
                const result = yield wishlist_service_1.WishlistService.removeFromWishlist(usuarioId, id);
                if (!result) {
                    return res.status(404).json({ ok: false, msg: 'El ítem no existe o ya fue eliminado' });
                }
                res.json({ ok: true, msg: 'Libro eliminado de favoritos' });
            }
            catch (error) {
                res.status(500).json({ ok: false, msg: 'Error al eliminar' });
            }
        });
    }
};
