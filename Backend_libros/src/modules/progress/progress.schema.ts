import { Schema, model } from 'mongoose';
import { Progress } from './progress.model';

const progressSchema = new Schema<Progress>({
    userId: { type: String, required: true },
    bookId: { type: String, required: true },
    currentPage: { type: Number, default: 0 },
    totalPages: { type: Number, required: true },
    status: { 
        type: String, 
        enum: ['reading', 'finished', 'dropped'], 
        default: 'reading' 
    },
    startDate: { type: Date, default: Date.now },
    finishDate: { type: Date }
});

export const ProgressModel = model<Progress>('Progress', progressSchema);