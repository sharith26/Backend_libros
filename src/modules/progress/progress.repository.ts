import { ProgressModel } from "./progress.schema";
import { Progress } from "./progress.model";

export class ProgressRepository {
    async updateProgress(data: Partial<Progress>) {
        // Actualiza si existe, si no, lo crea (upsert)
        return await ProgressModel.findOneAndUpdate(
            { userId: data.userId, bookId: data.bookId },
            data,
            { new: true, upsert: true }
        );
    }

    async findByUser(userId: string) {
        return await ProgressModel.find({ userId });
    }
}