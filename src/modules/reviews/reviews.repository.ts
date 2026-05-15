import { ReviewModel } from "./reviews.schema";
import { Review } from "./reviews.model";

export class ReviewRepository {
    async create(data: Partial<Review>) {
        const newReview = new ReviewModel(data);
        return await newReview.save();
    }

    async findAll() {
        return await ReviewModel.find()
            .populate('usuarioId', 'nombre')
            .populate('libroId', 'titulo');
    }

    async findByBook(bookId: string) {
        return await ReviewModel.find({ libroId: bookId })
            .populate('usuarioId', 'nombre') // Agregado para ver quién comentó
            .sort({ createdAt: -1 });
    }

    async update(id: string, usuarioId: string, data: Partial<Review>) {
        return await ReviewModel.findOneAndUpdate(
            { _id: id, usuarioId }, 
            { $set: data }, 
            { new: true }
        );
    }

    async delete(id: string, usuarioId: string) {
        return await ReviewModel.findOneAndDelete({ _id: id, usuarioId });
    }

    async findByUser(userId: string) {
        return await ReviewModel.find({ usuarioId: userId });
    }
}