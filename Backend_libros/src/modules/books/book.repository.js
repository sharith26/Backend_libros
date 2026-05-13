"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepository = void 0;
const book_schema_1 = require("./book.schema");
class BookRepository {
    // Crear un nuevo libro
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newBook = new book_schema_1.BookModel(data);
            return yield newBook.save();
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield book_schema_1.BookModel.find();
        });
    }
    // Buscar por ID
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield book_schema_1.BookModel.findById(id);
        });
    }
    search(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield book_schema_1.BookModel.find({
                $or: [
                    { Nombre: { $regex: query, $options: 'i' } },
                    { Autor: { $regex: query, $options: 'i' } }
                ]
            });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield book_schema_1.BookModel.findByIdAndDelete(id);
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield book_schema_1.BookModel.findByIdAndUpdate(id, data, { new: true });
        });
    }
}
exports.BookRepository = BookRepository;
