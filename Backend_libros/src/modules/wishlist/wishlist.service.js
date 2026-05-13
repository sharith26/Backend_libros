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
exports.WishlistService = void 0;
const wishlist_model_1 = require("./wishlist.model"); // Asegúrate de que el path a tu modelo sea correcto
exports.WishlistService = {
    // Agregar a favoritos
    addToWishlist(usuarioId, libroId, prioridad, notas) {
        return __awaiter(this, void 0, void 0, function* () {
            const nuevoItem = new wishlist_model_1.WishlistModel({ usuarioId, libroId, prioridad, notas });
            return yield nuevoItem.save();
        });
    },
    // Obtener lista del usuario
    getUserWishlist(usuarioId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wishlist_model_1.WishlistModel.find({ usuarioId }).populate('libroId');
        });
    },
    // ACTUALIZAR (Esto quita el error de 'updateWishlistItem')
    updateWishlistItem(usuarioId, itemId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wishlist_model_1.WishlistModel.findOneAndUpdate({ _id: itemId, usuarioId: usuarioId }, { $set: data }, { new: true });
        });
    },
    // ELIMINAR (Esto quita el error de argumentos en delete)
    removeFromWishlist(usuarioId, itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wishlist_model_1.WishlistModel.findOneAndDelete({ _id: itemId, usuarioId: usuarioId });
        });
    }
};
