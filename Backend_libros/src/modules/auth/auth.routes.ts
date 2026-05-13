import { Router } from "express";
import { AuthController } from "./auth.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();
const _AuthController = new AuthController();

/**
 * @openapi
 * /auth/register:
 *   post:
 *     tags: [Auth]
 *     summary: Registrar usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Éxito
 */
router.post('/register', _AuthController.register);

/**
 * @openapi
 * /auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Éxito
 */
router.post('/login', _AuthController.login);

/**
 * @openapi
 * /auth/profile:
 *   get:
 *     tags: [Auth]
 *     summary: Perfil del usuario
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Éxito
 */
router.get('/profile', authMiddleware, _AuthController.getProfile);

/**
 * @openapi
 * /auth/update:
 *   put:
 *     tags: [Auth]
 *     summary: Actualizar usuario
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Éxito
 */
router.put('/update', authMiddleware, _AuthController.updateUser);

/**
 * @openapi
 * /auth/delete:
 *   delete:
 *     tags: [Auth]
 *     summary: Borrar usuario
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Éxito
 */
router.delete('/delete', authMiddleware, _AuthController.deleteUser);

export default router;