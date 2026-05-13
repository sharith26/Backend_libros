import { Request, Response } from "express";
import { UsersService } from "./users.service";

export class UsersController {

    private _UsersService = new UsersService();

    register = async (req: Request, res: Response) => {

        const result = await this._UsersService.register(req.body);

        res.status(201).json(result)
    }

    findAllUsers = async (req: Request, res: Response) => {

        const result = await this._UsersService.findAllUsers();

        res.status(200).json(result)
    }

    update = async (req: Request, res: Response) => {

        try {

            const { id } = req.params;

            const result = {
                ok: true,
                message: `Usuario ${id} actualizado`,
                data: req.body
            };

            res.status(200).json(result);

        } catch (error) {

            res.status(500).json({
                ok: false,
                message: "Error al actualizar usuario"
            });

        }
    }

    delete = async (req: Request, res: Response) => {

        try {

            const { id } = req.params;

            res.status(200).json({
                ok: true,
                message: `Usuario ${id} eliminado`
            });

        } catch (error) {

            res.status(500).json({
                ok: false,
                message: "Error al eliminar usuario"
            });

        }
    }

}