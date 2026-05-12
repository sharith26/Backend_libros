import { Request, Response } from 'express';
import { WishlistService } from './wishlist.service';

export const WishlistController = {
    async add(req: Request, res: Response) {
        try {
            const { libroId, prioridad, notas } = req.body;
            const usuarioId = (req as any).user.id; // Obtenido del token
            const item = await WishlistService.addToWishlist(usuarioId, libroId, prioridad, notas);
            res.status(201).json({ ok: true, item });
        } catch (error) {
            res.status(500).json({ ok: false, msg: 'Error al agregar a favoritos' });
        }
    },
    async get(req: Request, res: Response) {
        try {
            const usuarioId = (req as any).user.id;
            const list = await WishlistService.getUserWishlist(usuarioId);
            res.json({ ok: true, list });
        } catch (error) {
            res.status(500).json({ ok: false, msg: 'Error al obtener la lista' });
        }
    }
};