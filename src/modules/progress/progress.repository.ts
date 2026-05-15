import { ProgressModel } from "./progress.schema";
import { Progress } from "./progress.model";
import { ObjectId } from "mongodb";

export class ProgressRepository {
    async updateProgress(data: Partial<Progress>) {
        return await ProgressModel.findOneAndUpdate(
            { userId: data.userId, bookId: data.bookId },
            data,
            { new: true, upsert: true }
        );
    }

    async findByUser(userId: string) {
        return await ProgressModel.find({ userId });
    }

    async deleteProgress(id: string) {
        return await ProgressModel.findByIdAndDelete(id);
    }
}