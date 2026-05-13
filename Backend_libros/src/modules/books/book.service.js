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
exports.deleteBook = exports.updateBook = exports.getBookById = exports.getBooks = exports.createBook = exports.BookService = void 0;
const database_1 = require("../../config/database");
const mongodb_1 = require("mongodb");
const book_repository_1 = require("./book.repository");
class BookService {
    constructor() {
        this.repository = new book_repository_1.BookRepository();
    }
    getAllBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findAll();
        });
    }
    getOneBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findById(id);
        });
    }
    createBook(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.create(data);
        });
    }
    updateBook(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.update(id, data);
        });
    }
    deleteBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.delete(id);
        });
    }
    searchBooks(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.search(query);
        });
    }
}
exports.BookService = BookService;
const collection = "books";
const createBook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const db = (0, database_1.getDb)();
    return yield db.collection(collection).insertOne(data);
});
exports.createBook = createBook;
const getBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const db = (0, database_1.getDb)();
    return yield db.collection(collection).find().toArray();
});
exports.getBooks = getBooks;
const getBookById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const db = (0, database_1.getDb)();
    return yield db.collection(collection).findOne({
        _id: new mongodb_1.ObjectId(id),
    });
});
exports.getBookById = getBookById;
const updateBook = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const db = (0, database_1.getDb)();
    return yield db.collection(collection).updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: data });
});
exports.updateBook = updateBook;
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const db = (0, database_1.getDb)();
    return yield db.collection(collection).deleteOne({
        _id: new mongodb_1.ObjectId(id),
    });
});
exports.deleteBook = deleteBook;
