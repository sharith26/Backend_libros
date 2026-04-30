import { ReviewRepository } from "./reviews.repository";
import { Review } from "./reviews.model";

export class ReviewService {
    private repository = new ReviewRepository();

    async addReview(data: Review) {
        // Podrías añadir validaciones de negocio aquí
        return await this.repository.create(data);
    }

    async getBookReviews(bookId: string) {
        return await this.repository.findByBook(bookId);
    }
}