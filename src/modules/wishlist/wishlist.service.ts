import {WishlistModel} from './wishlist.model'; // Asegúrate de que el path a tu modelo sea correcto

export const WishlistService = {
    // Agregar a favoritos
    async addToWishlist(usuarioId: string, libroId: string, prioridad: string, notas: string) {
        const nuevoItem = new WishlistModel({ usuarioId, libroId, prioridad, notas });
        return await nuevoItem.save();
    },

    // Obtener lista del usuario
    async getUserWishlist(usuarioId: string) {
        return await WishlistModel.find({ usuarioId }).populate('libroId');
    },

    // ACTUALIZAR (Esto quita el error de 'updateWishlistItem')
    async updateWishlistItem(usuarioId: string, itemId: string, data: { prioridad?: string, notas?: string }) {
        return await WishlistModel.findOneAndUpdate(
            { _id: itemId, usuarioId: usuarioId },
            { $set: data },
            { new: true }
        );
    },

    // ELIMINAR (Esto quita el error de argumentos en delete)
    async removeFromWishlist(usuarioId: string, itemId: string) {
        return await WishlistModel.findOneAndDelete({ _id: itemId, usuarioId: usuarioId });
    }
};