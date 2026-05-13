"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const progress_controller_1 = require("./progress.controller");
const router = (0, express_1.Router)();
const controller = new progress_controller_1.ProgressController();
/**
 * @openapi
 * /progress:
 *   post:
 *     tags:
 *       - Progress
 *     summary: Crear progreso
 *     responses:
 *       201:
 *         description: Progreso creado
 */
router.post('/', controller.update);
/**
 * @openapi
 * /progress/{userId}:
 *   get:
 *     tags:
 *       - Progress
 *     summary: Obtener progreso
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Progreso encontrado
 */
router.get('/:userId', controller.getByUserId);
/**
 * @openapi
 * /progress/{id}:
 *   put:
 *     tags:
 *       - Progress
 *     summary: Actualizar progreso
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Progreso actualizado
 */
router.put('/:id', controller.update);
/**
 * @openapi
 * /progress/{id}:
 *   delete:
 *     tags:
 *       - Progress
 *     summary: Eliminar progreso
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Progreso eliminado
 */
router.delete('/:id', controller.delete);
exports.default = router;
