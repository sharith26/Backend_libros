import { Request, Response, NextFunction } from "express";
import { AuthService } from "./auth.service";


export class AuthController {
    private _AuthService = new AuthService();


    register = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this._AuthService.register(req.body);
            res.status(201).json(result);
        } catch (error) {
            next(error)
        }
    }

    login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this._AuthService.login(req.body);
            res.status(200).json(result);
        } catch (error) {
            next(error)
        }
    }

}