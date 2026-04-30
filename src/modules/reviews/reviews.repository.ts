import { ReviewModel } from "./reviews.schema";
import { Review } from "./reviews.model";

export class ReviewRepository {
    async create(data: Review) {
        const newReview = new ReviewModel(data);
        return await newReview.save();
    }

    async findByBook(bookId: string) {
        return await ReviewModel.find({ bookId }).sort({ createdAt: -1 });
    }

    async findByUser(userId: string) {
        return await ReviewModel.find({ userId });
    }
}