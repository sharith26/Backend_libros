import { Request, Response } from "express";
import { UsersService } from "./users.service";

export class UsersController {
    private _UsersService = new UsersService();

    register = async (req: Request, res: Response) => {
        try {
            const result = await this._UsersService.register(req.body);
            res.status(201).json(result);
        } catch (error: any) {
            res.status(400).json({ ok: false, message: error.message });
        }
    }

    findAllUsers = async (req: Request, res: Response) => {
        try {
            // Se envía req.query como objeto para evitar "Expected 0 arguments"
            const result = await this._UsersService.findAllUsers(req.query as any);
            res.status(200).json(result);
        } catch (error: any) {
            res.status(500).json({ ok: false, message: error.message });
        }
    }

    update = async (req: Request, res: Response) => {
        try {
            const id = String(req.params.id); // Corrige error de tipo string | string[]
            const result = await this._UsersService.updateUser(id, req.body);
            res.status(200).json({ ok: true, data: result });
        } catch (error: any) {
            res.status(500).json({ ok: false, message: error.message });
        }
    }

    delete = async (req: Request, res: Response) => {
        try {
            const id = String(req.params.id); // Corrige error de tipo string | string[]
            await this._UsersService.deleteUser(id);
            res.status(200).json({ ok: true, message: "Usuario eliminado" });
        } catch (error: any) {
            res.status(500).json({ ok: false, message: error.message });
        }
    }
}