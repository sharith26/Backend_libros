import { Router } from "express";
import { ProgressController } from "./progress.controller";

const router = Router();
const controller = new ProgressController();

/**
 * @openapi
 * /progress:
 *   post:
 *     tags:
 *       - Progress
 *     summary: Crear o actualizar progreso
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - bookId
 *               - paginaActual
 *             properties:
 *               userId:
 *                 type: string
 *                 example: "645a..."
 *               bookId:
 *                 type: string
 *                 example: "645b..."
 *               paginaActual:
 *                 type: number
 *                 example: 45
 *               totalPaginas:
 *                 type: number
 *                 example: 300
 *     responses:
 *       200:
 *         description: Progreso guardado correctamente
 */
router.post("/", controller.update);

/**
 * @openapi
 * /progress/{userId}:
 *   get:
 *     tags:
 *       - Progress
 *     summary: Obtener progreso por Usuario
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de progresos del usuario
 */
router.get("/:userId", controller.getByUserId);

/**
 * @openapi
 * /progress/{id}:
 *   put:
 *     tags:
 *       - Progress
 *     summary: Actualizar progreso por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               paginaActual:
 *                 type: number
 *               totalPaginas:
 *                 type: number
 *     responses:
 *       200:
 *         description: Progreso actualizado
 */
router.put("/:id", controller.update);

/**
 * @openapi
 * /progress/{id}:
 *   delete:
 *     tags:
 *       - Progress
 *     summary: Eliminar progreso
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Progreso eliminado
 */
router.delete("/:id", controller.delete);

export default router;