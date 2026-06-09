    import { Router } from "express";
    import { AuthController } from "./auth.controller";
    import { authMiddleware } from "../../middlewares/auth.middleware";

    const router = Router();
    const _AuthController = new AuthController();

    /**
     * @openapi
     * components:
     *   schemas:
     *     UserInput:
     *       type: object
     *       properties:
     *         nombre:
     *           type: string
     *         email:
     *           type: string
     *         password:
     *           type: string
     *         telefono:
     *           type: string
     *         biografia:
     *           type: string
     *
     *     UserResponse:
     *       type: object
     *       properties:
     *         id:
     *           type: string
     *         nombre:
     *           type: string
     *         email:
     *           type: string
     *         telefono:
     *           type: string
     *         biografia:
     *           type: string
     *         rol:
     *           type: string
     */

    /**
     * @openapi
     * /auth/register:
     *   post:
     *     tags:
     *       - Auth
     *     summary: Registrar usuario
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/UserInput'
     *     responses:
     *       201:
     *         description: Usuario registrado correctamente
     */
    router.post('/register', _AuthController.register);

    /**
     * @openapi
     * /auth/login:
     *   post:
     *     tags:
     *       - Auth
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
     *         description: Login exitoso
     */
    router.post('/login', _AuthController.login);

    /**
     * @openapi
     * /auth/profile:
     *   get:
     *     tags:
     *       - Auth
     *     summary: Perfil del usuario
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: Perfil obtenido correctamente
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/UserResponse'
     */
    router.get('/profile', authMiddleware, _AuthController.getProfile);

    /**
     * @openapi
     * /auth/update:
     *   put:
     *     tags:
     *       - Auth
     *     summary: Actualizar usuario
     *     security:
     *       - bearerAuth: []
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/UserInput'
     *     responses:
     *       200:
     *         description: Usuario actualizado correctamente
     */
    router.put('/update', authMiddleware, _AuthController.updateUser);

    /**
     * @openapi
     * /auth/delete:
     *   delete:
     *     tags:
     *       - Auth
     *     summary: Borrar usuario
     *     description: Elimina permanentemente la cuenta del usuario autenticado.
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: header
     *         name: Authorization
     *         required: true
     *         schema:
     *           type: string
     *         description: Token JWT Bearer
     *     responses:
     *       200:
     *         description: Usuario eliminado correctamente
     *       401:
     *         description: Token inválido o no enviado
     *       404:
     *         description: Usuario no encontrado
     */
    router.delete('/delete', authMiddleware, _AuthController.deleteUser);

    export default router;