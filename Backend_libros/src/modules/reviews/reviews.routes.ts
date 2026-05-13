import { Router } from "express";
import { ReviewController } from "./reviews.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();
const controller = new ReviewController();

/**
 * @openapi
 * /reviews:
 *   get:
 *     tags: [Reviews]
 *     summary: Listar reseñas
 *     responses:
 *       200:
 *         description: Éxito
 *
 *   post:
 *     tags: [Reviews]
 *     summary: Crear reseña
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               libroId:
 *                 type: string
 *               comentario:
 *                 type: string
 *               puntuacion:
 *                 type: number
 *     responses:
 *       201:
 *         description: Éxito
 */
router.get('/', controller.getAll);
router.post('/', authMiddleware, controller.create);

/**
 * @openapi
 * /reviews/book/{bookId}:
 *   get:
 *     tags: [Reviews]
 *     summary: Reseñas por libro
 *     parameters:
 *       - in: path
 *         name: bookId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Éxito
 */
router.get('/book/:bookId', controller.getByBook);

/**
 * @openapi
 * /reviews/{id}:
 *   put:
 *     tags: [Reviews]
 *     summary: Editar reseña
 *     security:
 *       - bearerAuth: []
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
 *               comentario:
 *                 type: string
 *     responses:
 *       200:
 *         description: Éxito
 *
 *   delete:
 *     tags: [Reviews]
 *     summary: Borrar reseña
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Éxito
 */
router.put('/:id', authMiddleware, controller.update);
router.delete('/:id', authMiddleware, controller.delete);

export default router;