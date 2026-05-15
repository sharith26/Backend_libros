import { Router } from "express";
import { UsersController } from "./users.controller";
import { createUserSchema } from "./users.schema";
import { validate } from "../../middlewares/validate.middleware";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();
const _UsersController = new UsersController();

/**
 * @openapi
 * /users/register:
 *   post:
 *     tags:
 *       - Users
 *     summary: Registrar usuario
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
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario creado
 */
router.post(
  "/register",
  validate(createUserSchema),
  _UsersController.register
);

/**
 * @openapi
 * /users:
 *   get:
 *     tags:
 *       - Users
 *     summary: Obtener usuarios
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: nombre
 *         schema:
 *           type: string
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 */
router.get("/", authMiddleware, _UsersController.findAllUsers);

/**
 * @openapi
 * /users/{id}:
 *   put:
 *     tags:
 *       - Users
 *     summary: Actualizar usuario
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
 *               nombre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario actualizado
 */
router.put("/:id", authMiddleware, _UsersController.update);

/**
 * @openapi
 * /users/{id}:
 *   delete:
 *     tags:
 *       - Users
 *     summary: Eliminar usuario
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
 *         description: Usuario eliminado
 */
router.delete("/:id", authMiddleware, _UsersController.delete);

export default router;