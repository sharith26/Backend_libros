import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (req: Request, res: Response, error: Error, next: NextFunction) => {
    return res.status(500).json({
        message: error.message || 'Error interno del servidor',
    })
}