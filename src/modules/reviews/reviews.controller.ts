import { Request, Response } from 'express';
import { ReviewRepository } from './reviews.repository';

export class ReviewController {
    private repository = new ReviewRepository();

    getAll = async (req: Request, res: Response) => {
        try {
            const puntuacion = req.query.puntuacion ? String(req.query.puntuacion) : undefined;
            const usuarioId = req.query.usuarioId ? String(req.query.usuarioId) : undefined;

            const reviews = await this.repository.findAll(); 
            res.status(200).json({ ok: true, data: reviews });
        } catch (error) {
            res.status(500).json({ ok: false, msg: 'Error al obtener reseñas' });
        }
    }

    create = async (req: Request, res: Response) => {
        try {
            const usuarioId = (req as any).user.id;
            const data = { ...req.body, usuarioId };
            const result = await this.repository.create(data);
            res.status(201).json({ ok: true, msg: 'Reseña creada', data: result });
        } catch (error) {
            res.status(400).json({ ok: false, msg: 'Error al crear' });
        }
    }

    getByBook = async (req: Request, res: Response) => {
        try {
            const bookId = String(req.params.bookId);
            const reviews = await this.repository.findByBook(bookId);
            res.status(200).json({ ok: true, data: reviews });
        } catch (error) {
            res.status(404).json({ ok: false, msg: 'No encontrado' });
        }
    }

    update = async (req: Request, res: Response) => {
        try {
            const id = String(req.params.id);
            const usuarioId = (req as any).user.id;
            const result = await this.repository.update(id, usuarioId, req.body);
            
            if (!result) return res.status(403).json({ ok: false, msg: 'No autorizado o no existe' });
            
            res.status(200).json({ ok: true, msg: 'Reseña actualizada', data: result });
        } catch (error) {
            res.status(500).json({ ok: false, msg: 'Error al actualizar' });
        }
    }

    delete = async (req: Request, res: Response) => {
        try {
            const id = String(req.params.id);
            const usuarioId = (req as any).user.id;
            const result = await this.repository.delete(id, usuarioId);

            if (!result) return res.status(403).json({ ok: false, msg: 'No autorizado' });

            res.status(200).json({ ok: true, msg: 'Reseña eliminada' });
        } catch (error) {
            res.status(500).json({ ok: false, msg: 'Error al eliminar' });
        }
    }
}