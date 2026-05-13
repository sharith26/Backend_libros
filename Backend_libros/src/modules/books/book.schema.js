"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModel = void 0;
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
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
exports.BookModel = (0, mongoose_1.model)('Book', bookSchema);
