import jwt from "jsonwebtoken";
import { env } from "../config/env";


export interface JwtPayload {
    sub: string;
    email: string;
    role: string;
}


export const signToken = (payload: JwtPayload): string => {
    return jwt.sign(payload, env.jwtSecret as string, {
        expiresIn: '1d',
    });
};

export const verifyToken = (token: string): JwtPayload => {
    return jwt.verify(token, env.jwtSecret as string) as JwtPayload;
};