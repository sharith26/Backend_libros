"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reviews_controller_1 = require("./reviews.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const router = (0, express_1.Router)();
const controller = new reviews_controller_1.ReviewController();
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
router.post('/', auth_middleware_1.authMiddleware, controller.create);
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
router.put('/:id', auth_middleware_1.authMiddleware, controller.update);
router.delete('/:id', auth_middleware_1.authMiddleware, controller.delete);
exports.default = router;
