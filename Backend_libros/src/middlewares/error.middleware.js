"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const errorMiddleware = (error, _req, res, _next) => {
    return res.status(500).json({
        message: error.message || 'Error interno del servidor',
    });
};
exports.errorMiddleware = errorMiddleware;
