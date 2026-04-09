import { getDb } from "../../config/database";
import { Book } from "./book.model";
import { ObjectId } from "mongodb";

const collection = "books";

// Crear libro
export const createBook = async (data: Book) => {
  const db = getDb();
  return await db.collection(collection).insertOne(data);
};

// Obtener todos
export const getBooks = async () => {
  const db = getDb();
  return await db.collection(collection).find().toArray();
};

// Obtener por ID
export const getBookById = async (id: string) => {
  const db = getDb();
  return await db.collection(collection).findOne({
    _id: new ObjectId(id),
  });
};

// Actualizar
export const updateBook = async (id: string, data: Partial<Book>) => {
  const db = getDb();
  return await db.collection(collection).updateOne(
    { _id: new ObjectId(id) },
    { $set: data }
  );
};

// Eliminar
export const deleteBook = async (id: string) => {
  const db = getDb();
  return await db.collection(collection).deleteOne({
    _id: new ObjectId(id),
  });
};