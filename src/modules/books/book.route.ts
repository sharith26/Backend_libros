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
 *     description: Permite registrar un nuevo libro.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: Libro creado exitosamente
 *       400:
 *         description: Error en la validación
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
 *     responses:
 *       200:
 *         description: Lista de libros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
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
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Libro encontrado
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
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: Libro actualizado
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
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Libro eliminado
 */
router.delete("/:id", controller.remove);

export default router;