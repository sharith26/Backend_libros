import { WishlistModel } from './wishlist.model';

export const WishlistRepository = {
    async create(data: any) {
        return await WishlistModel.create(data);
    },
    async getByUserId(usuarioId: string) {
        return await WishlistModel.find({ usuarioId }).populate('libroId');
    },
    async delete(id: string) {
        return await WishlistModel.findByIdAndDelete(id);
    },
    // Añadido para complementar tu controlador
    async update(id: string, data: any) {
        return await WishlistModel.findByIdAndUpdate(id, data, { new: true });
    }
};
