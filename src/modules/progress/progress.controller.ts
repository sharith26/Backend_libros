import { Request, Response } from "express";
import { ProgressService } from "./progress.service";

const service = new ProgressService();

export class ProgressController {
    async update(req: Request, res: Response) {
        try {
            const result = await service.saveProgress(req.body);
            res.status(200).json(result);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }

    async getByUserId(req: Request, res: Response) {
        try {
            const result = await service.getUserLibrary(req.params.userId as string);
            res.status(200).json(result);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}