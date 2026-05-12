import { WishlistRepository } from './wishlist.repository';

export const WishlistService = {
    async addToWishlist(usuarioId: string, libroId: string, prioridad: string, notas: string) {
        // Podrías agregar una validación aquí para no duplicar libros
        return await WishlistRepository.create({ usuarioId, libroId, prioridad, notas });
    },
    async getUserWishlist(usuarioId: string) {
        return await WishlistRepository.getByUserId(usuarioId);
    },
    async removeFromWishlist(id: string) {
        return await WishlistRepository.delete(id);
    }
};