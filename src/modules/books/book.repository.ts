import { BookModel } from "./book.schema";
import { Book } from "./book.model";

export class BookRepository {
    
    async create(data: Book) {
        const newBook = new BookModel(data);
        return await newBook.save();
    }

    async findAll(filters: any = {}) {
        const query: any = {};

        if (filters.genero) {
            query.Genero = { $regex: filters.genero, $options: 'i' };
        }

        if (filters.autor) {
            query.Autor = { $regex: filters.autor, $options: 'i' };
        }

        if (filters.estado) {
            query.Estado = filters.estado;
        }

        return await BookModel.find(query);
    }

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

    async delete(id: string) {
        return await BookModel.findByIdAndDelete(id);
    }

    async update(id: string, data: Partial<Book>) {
        return await BookModel.findByIdAndUpdate(id, data, { new: true });
    }
}