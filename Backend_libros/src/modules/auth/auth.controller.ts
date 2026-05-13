import { Request, Response } from "express";

export class AuthController {
    async register(req: Request, res: Response) {
        try {
            res.status(201).json({ ok: true, msg: "Usuario registrado" });
        } catch (e) { res.status(400).json({ ok: false }); }
    }

    async login(req: Request, res: Response) {
        try {
            res.status(200).json({ ok: true, token: "JWT_TOKEN_HERE" });
        } catch (e) { res.status(401).json({ ok: false }); }
    }

    async getProfile(req: Request, res: Response) {
        try {
            res.status(200).json({ ok: true, user: { nombre: "Sharith", email: "sharith@gmail.com" } });
        } catch (e) { res.status(500).json({ ok: false }); }
    }

    async updateUser(req: Request, res: Response) {
        try {
            const updates = req.body;
            res.status(200).json({ ok: true, msg: "Datos actualizados", updates });
        } catch (e) { res.status(500).json({ ok: false }); }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            res.status(200).json({ ok: true, msg: "Usuario eliminado correctamente" });
        } catch (e) { res.status(500).json({ ok: false }); }
    }
}