import { Request, Response } from "express";
import * as service from "./book.service";

// Crear
export const create = async (req: Request, res: Response) => {
  try {
    // Aquí viajan nombre, tipo, paginas, isbn, tapa, formato, etc.
    const result = await service.createBook(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error creating book", error });
  }
};

// Obtener todos
export const getAll = async (_req: Request, res: Response) => {
  try {
    const result = await service.getBooks();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Error getting books", error });
  }
};

// Obtener por ID
export const getById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const result = await service.getBookById(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Error getting book", error });
  }
};

// Actualizar
export const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    // req.body permite enviar los campos nuevos para actualizar
    const result = await service.updateBook(id, req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Error updating book", error });
  }
};

// Eliminar
export const remove = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const result = await service.deleteBook(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Error deleting book", error });
  }
};