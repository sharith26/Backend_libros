import { Request, Response } from "express";
import { ReviewService } from "./reviews.service";

const service = new ReviewService();

export class ReviewController {
    async create(req: Request, res: Response) {
        try {
            const result = await service.addReview(req.body);
            res.status(201).json(result);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }

    async getByBook(req: Request, res: Response) {
        try {
            // Usamos 'as string' para asegurar el tipo
            const result = await service.getBookReviews(req.params.bookId as string);
            res.status(200).json(result);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}