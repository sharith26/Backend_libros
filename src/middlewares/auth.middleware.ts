import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../libs/jwt";


export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            message: 'Token requerido'
        })
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            message: 'Token requerido'
        })
    }

    const payload = verifyToken(token);

    req.user = payload;

    next();
}