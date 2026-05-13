import { Schema, model } from 'mongoose';
import { Review } from './reviews.model';

const reviewSchema = new Schema<Review>({
    userId: { type: String, required: true },
    bookId: { type: Schema.Types.ObjectId as any, ref: 'Book', required: true },
    rating: { 
        type: Number, 
        required: true, 
        min: 1, 
        max: 5 
    },
    comment: { type: String, required: true, maxlength: 500 },
    createdAt: { type: Date, default: Date.now }
});

export const ReviewModel = model<Review>('Review', reviewSchema);