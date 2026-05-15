import { Router } from "express";
import * as controller from "./book.controller";

const router = Router();

/**
 * @openapi
 * /books:
 *   post:
 *     tags:
 *       - Books
 *     summary: Crear libro
 *     description: Registrar un nuevo libro en la biblioteca.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: Libro creado correctamente
 */
router.post("/", controller.create);

/**
 * @openapi
 * /books:
 *   get:
 *     tags:
 *       - Books
 *     summary: Obtener libros
 *     description: Retorna todos los libros registrados.
 *     parameters:
 *       - in: query
 *         name: genero
 *         schema:
 *           type: string
 *         description: Filtrar por género
 *
 *       - in: query
 *         name: autor
 *         schema:
 *           type: string
 *         description: Filtrar por autor
 *
 *     responses:
 *       200:
 *         description: Lista de libros obtenida correctamente
 */
router.get("/", controller.getAll);

/**
 * @openapi
 * /books/{id}:
 *   get:
 *     tags:
 *       - Books
 *     summary: Obtener libro por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del libro
 *     responses:
 *       200:
 *         description: Libro encontrado
 *
 *       404:
 *         description: Libro no encontrado
 */
router.get("/:id", controller.getById);

/**
 * @openapi
 * /books/{id}:
 *   put:
 *     tags:
 *       - Books
 *     summary: Actualizar libro
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del libro
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *
 *     responses:
 *       200:
 *         description: Libro actualizado correctamente
 */
router.put("/:id", controller.update);

/**
 * @openapi
 * /books/{id}:
 *   delete:
 *     tags:
 *       - Books
 *     summary: Eliminar libro
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del libro
 *
 *     responses:
 *       200:
 *         description: Libro eliminado correctamente
 */
router.delete("/:id", controller.remove);

export default router;