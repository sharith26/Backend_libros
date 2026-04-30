import { BookModel } from "./book.schema";
import { Book } from "./book.model";

export class BookRepository {
    
    // Crear un nuevo libro
    async create(data: Book) {
        const newBook = new BookModel(data);
        return await newBook.save();
    }

    // Obtener todos los libros (Catálogo)
    async findAll() {
        return await BookModel.find();
    }

    // Buscar por ID
    async findById(id: string) {
        return await BookModel.findById(id);
    }

    async search(query: string) {
        return await BookModel.find({
            $or: [
                { Nombre: { $regex: query, $options: 'i' } }, 
                { Autor: { $regex: query, $options: 'i' } } 
            ]
        });
    }

    // Eliminar un libro
    async delete(id: string) {
        return await BookModel.findByIdAndDelete(id);
    }

    async update(id: string, data: Partial<Book>) {
        return await BookModel.findByIdAndUpdate(id, data, { new: true });
    }
}