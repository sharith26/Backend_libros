import { Schema, model } from 'mongoose';

const wishlistSchema = new Schema({
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
    notas: { type: String },
    fechaAgregado: { type: Date, default: Date.now }
});

export const WishlistModel = model('Wishlist', wishlistSchema);