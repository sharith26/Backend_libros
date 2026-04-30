import { getDb } from "../../config/database";
import { Book } from "./book.model";
import { ObjectId } from "mongodb";
import { BookRepository } from "./book.repository";

export class BookService {
    private repository = new BookRepository();

    // --- Métodos de tu clase original ---
    async getAllBooks() {
        return await this.repository.findAll();
    }

    async getOneBook(id: string) {
        return await this.repository.findById(id);
    }

    async createBook(data: Book) {
        return await this.repository.create(data);
    }

    async updateBook(id: string, data: Partial<Book>) {
        return await this.repository.update(id, data);
    }

    async deleteBook(id: string) {
        return await this.repository.delete(id);
    }

    async searchBooks(query: string) {
        return await this.repository.search(query);
    }
}

const collection = "books";

export const createBook = async (data: Book) => {
  const db = getDb();
  return await db.collection(collection).insertOne(data);
};

export const getBooks = async () => {
  const db = getDb();
  return await db.collection(collection).find().toArray();
};

export const getBookById = async (id: string) => {
  const db = getDb();
  return await db.collection(collection).findOne({
    _id: new ObjectId(id),
  });
};

export const updateBook = async (id: string, data: Partial<Book>) => {
  const db = getDb();
  return await db.collection(collection).updateOne(
    { _id: new ObjectId(id) },
    { $set: data }
  );
};

export const deleteBook = async (id: string) => {
  const db = getDb();
  return await db.collection(collection).deleteOne({
    _id: new ObjectId(id),
  });
};