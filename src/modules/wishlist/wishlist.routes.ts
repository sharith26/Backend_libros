import { Router } from 'express';
import { WishlistController } from './wishlist.controller';
import { authMiddleware } from '../../middlewares/auth.middleware'; 

const router = Router();

/**
 * @openapi
 * /wishlist:
 *   get:
 *     summary: Obtener lista de deseos del usuario
 *     tags: [Wishlist]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista obtenida con éxito
 */
router.get('/', authMiddleware, WishlistController.get);

/**
 * @openapi
 * /wishlist:
 *   post:
 *     summary: Agregar libro a favoritos
 *     tags: [Wishlist]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Nombre:
 *                 type: string
 *               Tipo:
 *                 type: string
 *               TituloIngles:
 *                 type: string
 *               Autor:
 *                 type: string
 *               Descripcion:
 *                 type: string
 *               FechaPublicacion:
 *                 type: string
 *               Paginas:
 *                 type: number
 *               ISBN:
 *                 type: string
 *               Tapa:
 *                 type: string
 *               Formato:
 *                 type: string
 *               ImagenUrl:
 *                 type: string
 *               Genero:
 *                 type: array
 *                 items:
 *                   type: string
 *               Rating:
 *                 type: number
 *               Estado:
 *                 type: string
 *               Idioma:
 *                 type: string
 *     responses:
 *       201:
 *         description: Libro agregado correctamente
 */
router.post('/', authMiddleware, WishlistController.add);

/**
 * @openapi
 * /wishlist/{id}:
 *   delete:
 *     summary: Eliminar un libro de la lista de favoritos
 *     tags: [Wishlist]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del registro en la wishlist
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Libro eliminado de la lista
 */
// router.delete('/:id', authMiddleware, WishlistController.delete); 

export default router;