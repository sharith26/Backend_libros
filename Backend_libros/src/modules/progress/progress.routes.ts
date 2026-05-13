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
 *     summary: Crear progreso
 *     responses:
 *       201:
 *         description: Progreso creado
 */
router.post('/', controller.update);

/**
 * @openapi
 * /progress/{userId}:
 *   get:
 *     tags:
 *       - Progress
 *     summary: Obtener progreso
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Progreso encontrado
 */
router.get('/:userId', controller.getByUserId);

/**
 * @openapi
 * /progress/{id}:
 *   put:
 *     tags:
 *       - Progress
 *     summary: Actualizar progreso
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Progreso actualizado
 */
router.put('/:id', controller.update);

/**
 * @openapi
 * /progress/{id}:
 *   delete:
 *     tags:
 *       - Progress
 *     summary: Eliminar progreso
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Progreso eliminado
 */
router.delete('/:id', controller.delete);

export default router;