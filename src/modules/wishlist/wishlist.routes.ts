import { Router } from "express";
import { WishlistController } from "./wishlist.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

/**
 * @openapi
 * /wishlist:
 *   get:
 *     summary: Obtener mi lista de deseos
 *     description: Retorna todos los libros favoritos del usuario.
 *     tags:
 *       - Wishlist
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: prioridad
 *         schema:
 *           type: string
 *           enum:
 *             - Baja
 *             - Media
 *             - Alta
 *         description: Filtrar por prioridad
 *
 *       - in: query
 *         name: libroId
 *         schema:
 *           type: string
 *         description: Filtrar por ID del libro
 *
 *     responses:
 *       200:
 *         description: Lista obtenida con éxito
 */
router.get("/", authMiddleware, WishlistController.get);

/**
 * @openapi
 * /wishlist:
 *   post:
 *     summary: Agregar libro a favoritos
 *     description: Guarda un libro en la lista de deseos.
 *     tags:
 *       - Wishlist
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - libroId
 *             properties:
 *               libroId:
 *                 type: string
 *                 example: "64f1a2b3c4d5e6f7"
 *               prioridad:
 *                 type: string
 *                 enum:
 *                   - Baja
 *                   - Media
 *                   - Alta
 *                 example: "Alta"
 *               notas:
 *                 type: string
 *                 example: "Leer después de Jane Austen"
 *     responses:
 *       201:
 *         description: Libro agregado a la lista
 */
router.post("/", authMiddleware, WishlistController.add);

/**
 * @openapi
 * /wishlist/{id}:
 *   put:
 *     summary: Actualizar prioridad o notas
 *     tags:
 *       - Wishlist
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               prioridad:
 *                 type: string
 *                 example: "Media"
 *               notas:
 *                 type: string
 *                 example: "Ya lo tengo en físico"
 *     responses:
 *       200:
 *         description: Item actualizado correctamente
 */
router.put("/:id", authMiddleware, WishlistController.update);

/**
 * @openapi
 * /wishlist/{id}:
 *   delete:
 *     summary: Quitar libro de favoritos
 *     tags:
 *       - Wishlist
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
 *         description: Libro eliminado correctamente
 */
router.delete("/:id", authMiddleware, WishlistController.delete);

export default router;