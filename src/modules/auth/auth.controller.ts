import { Request, Response } from "express";
import { AuthService } from "./auth.service";

export class AuthController {

    private service = new AuthService();

    register = async (
        req: Request,
        res: Response
    ) => {
        try {
            const result = await this.service.register(req.body);
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
            const result = await this.service.login(req.body);
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
            // Extraemos el ID que el middleware guardó en req.user
            const userId = (req as any).user.id;
            
            // Llamamos al servicio para traer la info completa (incluyendo telefono/bio)
            const result = await this.service.getProfile(userId);

            res.status(200).json({
                ok: true,
                user: result // Aquí vendrá la info de la DB
            });

        } catch (error: any) {
            res.status(500).json({
                ok: false,
                message: error.message
            });
        }
    };

    updateUser = async (
        req: Request,
        res: Response
    ) => {
        try {
            const userId = (req as any).user.id;
            
            // Enviamos al servicio el ID y lo que viene en el body
            const result = await this.service.updateUser(userId, req.body);

            res.status(200).json({
                ok: true,
                msg: "Usuario actualizado",
                data: result // Ahora devuelve los datos reales actualizados
            });

        } catch (error: any) {
            res.status(500).json({
                ok: false,
                message: error.message
            });
        }
    };

    deleteUser = async (
        req: Request,
        res: Response
    ) => {
        try {
            const userId = (req as any).user.id;
            
            // Ejecutamos la eliminación en el servicio
            await this.service.deleteUser(userId);

            res.status(200).json({
                ok: true,
                msg: "Usuario eliminado"
            });

        } catch (error: any) {
            res.status(500).json({
                ok: false,
                message: error.message
            });
        }
    };
}