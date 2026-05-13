import { Request, Response } from "express";

import { AuthService }
    from "./auth.service";

export class AuthController {

    private service =
        new AuthService();

    register = async (
        req: Request,
        res: Response
    ) => {
        try {

            const result =
                await this.service.register(
                    req.body
                );

            res.status(201).json(result);

        } catch (error: any) {

            res.status(400).json({
                ok: false,
                message: error.message
            });
        }
    };

    login = async (
        req: Request,
        res: Response
    ) => {
        try {

            const result =
                await this.service.login(
                    req.body
                );

            res.status(200).json(result);

        } catch (error: any) {

            res.status(401).json({
                ok: false,
                message: error.message
            });
        }
    };

    getProfile = async (
        req: Request,
        res: Response
    ) => {
        try {

            res.status(200).json({
                ok: true,
                user: (req as any).user
            });

        } catch (error) {

            res.status(500).json({
                ok: false
            });
        }
    };

    updateUser = async (
        req: Request,
        res: Response
    ) => {
        try {

            res.status(200).json({
                ok: true,
                msg: "Usuario actualizado",
                data: req.body
            });

        } catch (error) {

            res.status(500).json({
                ok: false
            });
        }
    };

    deleteUser = async (
        req: Request,
        res: Response
    ) => {
        try {

            res.status(200).json({
                ok: true,
                msg: "Usuario eliminado"
            });

        } catch (error) {

            res.status(500).json({
                ok: false
            });
        }
    };
}