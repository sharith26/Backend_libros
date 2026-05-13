"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const router = (0, express_1.Router)();
const _AuthController = new auth_controller_1.AuthController();
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
router.get('/profile', auth_middleware_1.authMiddleware, _AuthController.getProfile);
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
router.put('/update', auth_middleware_1.authMiddleware, _AuthController.updateUser);
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
router.delete('/delete', auth_middleware_1.authMiddleware, _AuthController.deleteUser);
exports.default = router;
