import { Router } from "express";
import { AuthController } from "./auth.controller";

const router = Router();
const _AuthController = new AuthController();

/**
 * @openapi
 * /auth/register:
 *   post:
 *     tags:
 *       - Auth
 *     summary: "Registrar nuevo usuario en la biblioteca"
 *     description: "Crea una cuenta para que el usuario pueda gestionar su biblioteca inteligente de libros."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - email
 *               - password
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Sharith"
 *               email:
 *                 type: string
 *                 example: "sharith@gmail.com"
 *               password:
 *                 type: string
 *                 example: "sharith123"
 *               foto:
 *                 type: string
 *                 example: "https://avatar-url.com/perfil.png"
 *     responses:
 *       201:
 *         description: "Usuario registrado con éxito"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       400:
 *         description: "Datos inválidos o el correo ya existe"
 *     security: [] 
 */
router.post('/register', _AuthController.register);

/**
 * @openapi
 * /auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: "Iniciar sesión con Google"
 *     description: "Autentica al usuario utilizando el token de Google para acceder a su colección de libros."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *                 description: "Token de Google proporcionado por el frontend de Angular"
 *     responses:
 *       200:
 *         description: "Login exitoso"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       401:
 *         description: "No autorizado - Credenciales incorrectas"
 *     security: []
 */
router.post('/login', _AuthController.login);

export default router;