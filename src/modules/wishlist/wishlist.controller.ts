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
            
            if (!libroId) {
                return res.status(400).json({ ok: false, msg: 'El ID del libro es obligatorio' });
            }

            const usuarioId = (req as any).user.id;
            const item = await WishlistService.addToWishlist(usuarioId, libroId, prioridad, notas);
            res.status(201).json({ ok: true, item });
        } catch (error) {
            res.status(500).json({ ok: false, msg: 'Error al agregar' });
        }
    },

    async update(req: Request, res: Response) {
        try {
            const id = req.params.id as string; 
            const { prioridad, notas } = req.body;
            const usuarioId = (req as any).user.id;

            const item = await WishlistService.updateWishlistItem(usuarioId, id, { prioridad, notas });
            
            if (!item) {
                return res.status(404).json({ ok: false, msg: 'No se encontró el ítem para actualizar' });
            }

            res.json({ ok: true, item });
        } catch (error) {
            res.status(500).json({ ok: false, msg: 'Error al actualizar' });
        }
    },

    async delete(req: Request, res: Response) {
        try {
            const id = req.params.id as string; 
            const usuarioId = (req as any).user.id;
            
            const result = await WishlistService.removeFromWishlist(usuarioId, id);
            
            if (!result) {
                return res.status(404).json({ ok: false, msg: 'El ítem no existe o ya fue eliminado' });
            }

            res.json({ ok: true, msg: 'Libro eliminado de favoritos' });
        } catch (error) {
            res.status(500).json({ ok: false, msg: 'Error al eliminar' });
        }
    }
};