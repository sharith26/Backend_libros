import { Request, Response } from 'express';
import { WishlistService } from './wishlist.service';

export const WishlistController = {
    async get(req: Request, res: Response) {
        try {
            const usuarioId = (req as any).user.id;
            const list = await WishlistService.getUserWishlist(usuarioId);
            res.json({ ok: true, list });
        } catch (error) {
            res.status(500).json({ ok: false, msg: 'Error al obtener la lista' });
        }
    },

    async add(req: Request, res: Response) {
        try {
            const { libroId, prioridad, notas } = req.body;
            const usuarioId = (req as any).user.id;
            const item = await WishlistService.addToWishlist(usuarioId, libroId, prioridad, notas);
            res.status(201).json({ ok: true, item });
        } catch (error) {
            res.status(500).json({ ok: false, msg: 'Error al agregar' });
        }
    },

    async update(req: Request, res: Response) {
        try {
            const id = req.params.id as string; // Solución al error de tipo
            const { prioridad, notas } = req.body;
            const usuarioId = (req as any).user.id;
            const item = await WishlistService.updateWishlistItem(usuarioId, id, { prioridad, notas });
            res.json({ ok: true, item });
        } catch (error) {
            res.status(500).json({ ok: false, msg: 'Error al actualizar' });
        }
    },

    async delete(req: Request, res: Response) {
        try {
            const id = req.params.id as string; // Solución al error de tipo
            const usuarioId = (req as any).user.id;
            await WishlistService.removeFromWishlist(usuarioId, id);
            res.json({ ok: true, msg: 'Libro eliminado de favoritos' });
        } catch (error) {
            res.status(500).json({ ok: false, msg: 'Error al eliminar' });
        }
    }
};