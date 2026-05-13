import { Schema, model } from 'mongoose';
import { Book } from './book.model';

const bookSchema = new Schema<Book>({
    Nombre: { type: String, required: true },
    Tipo: { type: String, required: true },
    TituloIngles: { type: String },
    Autor: { type: String, required: true },
    Descripcion: { type: String },
    FechaPublicacion: { type: String },
    Paginas: { type: Number, required: true },
    ISBN: { type: String },
    Tapa: { type: String, enum: ['Dura', 'Blanda'] },
    Formato: { type: String, enum: ['Fisico', 'Virtual'] },
    ImagenUrl: { type: String },
    Genero: [{ type: String }],
    Rating: { type: Number },
    Estado: { type: String, enum: ['Pendiente', 'Leyendo', 'Terminado'] },
    Idioma: { type: String }
});

export const BookModel = model<Book>('Book', bookSchema);