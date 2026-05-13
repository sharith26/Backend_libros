import { Request, Response } from 'express';

export class ReviewController {
    
    async getAll(req: Request, res: Response) {
        try {
            res.status(200).json({ ok: true, data: [] });
        } catch (error) {
            res.status(500).json({ ok: false, msg: 'Error al obtener reseñas' });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const body = req.body;
            res.status(201).json({ ok: true, msg: 'Reseña creada', data: body });
        } catch (error) {
            res.status(400).json({ ok: false, msg: 'Error al crear' });
        }
    }

    async getByBook(req: Request, res: Response) {
        try {
            const { bookId } = req.params;
            res.status(200).json({ ok: true, bookId });
        } catch (error) {
            res.status(404).json({ ok: false, msg: 'No encontrado' });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const body = req.body;
            res.status(200).json({ ok: true, msg: 'Reseña actualizada', id });
        } catch (error) {
            res.status(500).json({ ok: false, msg: 'Error al actualizar' });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            // Lógica para eliminar de la DB
            res.status(200).json({ ok: true, msg: 'Reseña eliminada' });
        } catch (error) {
            res.status(500).json({ ok: false, msg: 'Error al eliminar' });
        }
    }
}