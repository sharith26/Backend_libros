import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  return res.status(500).json({
    message: error.message || 'Error interno del servidor',
  });
};