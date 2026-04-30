import { Router } from "express";
import * as controller from "./book.controller";

const router = Router();

/**
 * @openapi
 * /projects:
 *   post:
 *     tags:
 *       - Projects
 *     summary: "Crear proyecto"
 *     description: "Permite registrar un nuevo libro en la biblioteca inteligente."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: "Proyecto creado exitosamente"
 *       400:
 *         description: "Error en la validación de datos"
 */
router.post("/", controller.create);

/**
 * @openapi
 * /projects:
 *   get:
 *     tags:
 *       - Projects
 *     summary: "Obtener proyectos"
 *     description: "Retorna la lista completa de libros registrados por el usuario."
 *     responses:
 *       200:
 *         description: "Lista de proyectos obtenida correctamente"
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
 * /projects/{id}:
 *   get:
 *     tags:
 *       - Projects
 *     summary: "Obtener proyecto por ID"
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: "ID único del libro/proyecto"
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: "Detalle del proyecto encontrado"
 *       404:
 *         description: "Proyecto no encontrado"
 */
router.get("/:id", controller.getById);

/**
 * @openapi
 * /projects/{id}:
 *   put:
 *     tags:
 *       - Projects
 *     summary: "Actualizar proyecto"
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
 *         description: "Proyecto actualizado correctamente"
 */
router.put("/:id", controller.update);

/**
 * @openapi
 * /projects/{id}:
 *   delete:
 *     tags:
 *       - Projects
 *     summary: "Eliminar proyecto"
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: "Proyecto eliminado correctamente"
 */
router.delete("/:id", controller.remove);

export default router;