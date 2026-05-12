import { Router } from "express";
import { ReviewController } from "./reviews.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();
const controller = new ReviewController();

/**
 * @openapi
 * /reviews:
 *   post:
 *     summary: Crear una nueva reseña de un libro
 *     tags: [Reviews]
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
 *                 minimum: 1
 *                 maximum: 5
 *     responses:
 *       201:
 *         description: Reseña creada con éxito
 *       401:
 *         description: Token no proporcionado o inválido
 */
router.post('/', authMiddleware, controller.create);

/**
 * @openapi
 * /reviews/book/{bookId}:
 *   get:
 *     summary: Obtener todas las reseñas de un libro específico
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: bookId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del libro para filtrar las reseñas
 *     responses:
 *       200:
 *         description: Lista de reseñas obtenida exitosamente
 *       404:
 *         description: El libro no tiene reseñas aún
 */
router.get('/book/:bookId', controller.getByBook);

export default router;