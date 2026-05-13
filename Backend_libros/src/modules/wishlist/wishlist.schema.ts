import { Schema, model, Types } from 'mongoose';

export interface Wishlist {
    _id?: string;
    usuarioId: Types.ObjectId; 
    libroId: Types.ObjectId;   
    prioridad: 'Baja' | 'Media' | 'Alta';
    notas?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const wishlistSchema = new Schema<Wishlist>({
    usuarioId: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    libroId: { 
        type: Schema.Types.ObjectId, 
        ref: 'Book', 
        required: true 
    },
    prioridad: { 
        type: String, 
        enum: ['Baja', 'Media', 'Alta'], 
        default: 'Media' 
    },
    notas: { type: String }
}, {
    timestamps: true 
});

export const WishlistModel = model<Wishlist>('Wishlist', wishlistSchema);