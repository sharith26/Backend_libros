import { ReviewRepository } from "./reviews.repository";
import { Review } from "./reviews.model";

export class ReviewService {
    private repository = new ReviewRepository();

    async addReview(data: Partial<Review>) {
        return await this.repository.create(data);
    }

    async getAllReviews() {
        return await this.repository.findAll(); 
    }

    async getBookReviews(bookId: string) {
        return await this.repository.findByBook(bookId);
    }

    async updateReview(id: string, usuarioId: string, data: Partial<Review>) {
        return await this.repository.update(id, usuarioId, data);
    }

    async deleteReview(id: string, usuarioId: string) {
        return await this.repository.delete(id, usuarioId);
    }
}