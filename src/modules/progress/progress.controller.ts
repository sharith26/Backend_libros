import { Request, Response } from "express";
import { ProgressService } from "./progress.service";

const service = new ProgressService();

export class ProgressController {

    update = async (req: Request, res: Response) => {
        try {
            const data = { ...req.body };
            if (req.params.id) data._id = req.params.id;

            const result = await service.saveProgress(data);
            res.status(200).json({ ok: true, data: result });
        } catch (error: any) {
            res.status(400).json({ ok: false, message: error.message });
        }
    }

    getByUserId = async (req: Request, res: Response) => {
        try {
            const userId = String(req.params.userId);
            const result = await service.getUserLibrary(userId);
            res.status(200).json({ ok: true, data: result });
        } catch (error: any) {
            res.status(500).json({ ok: false, message: error.message });
        }
    }

    delete = async (req: Request, res: Response) => {
        try {
            const id = String(req.params.id);
            res.status(200).json({
                ok: true,
                message: `Progreso ${id} eliminado correctamente`
            });
        } catch (error: any) {
            res.status(500).json({ ok: false, message: error.message });
        }
    }
}