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
 *     tags: [Wishlist]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista obtenida con éxito
 *
 *   post:
 *     summary: Agregar libro a favoritos
 *     description: Guarda un libro en la lista de deseos.
 *     tags: [Wishlist]
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
 *                 example: "Leer después de Oscuro"
 *     responses:
 *       201:
 *         description: Libro agregado a la lista
 */
router.get("/", authMiddleware, WishlistController.get);
router.post("/", authMiddleware, WishlistController.add);

/**
 * @openapi
 * /wishlist/{id}:
 *   put:
 *     summary: Actualizar prioridad o notas
 *     description: Modifica datos de un libro en wishlist.
 *     tags: [Wishlist]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del registro wishlist
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
 *                 example: "Ya lo compré"
 *     responses:
 *       200:
 *         description: Item actualizado correctamente
 *
 *   delete:
 *     summary: Quitar libro de favoritos
 *     description: Elimina un libro de la wishlist.
 *     tags: [Wishlist]
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
router.put("/:id", authMiddleware, WishlistController.update);
router.delete("/:id", authMiddleware, WishlistController.delete);

export default router;