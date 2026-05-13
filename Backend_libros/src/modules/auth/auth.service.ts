import { AuthRepository } from "./auth.repository";
import { User } from "../users/users.model";
import { hashPassword, comparePassword } from "../../libs/bcrypt";
import { signToken } from "../../libs/jwt";

export class AuthService {

    private repository = new AuthRepository();

    async register(user: User) {
        const exists = await this.repository.findEmail(user.email);

        if (exists) {
            throw new Error('el usuario ya existe');
        }

        const hashedPassword = await hashPassword(user.password);

        user.password = hashedPassword;
        user.role = 'user';

        const result = await this.repository.create(user);

        const token = signToken({
            sub: result._id!.toString(),
            email: result.email,
            role: result.role
        });

        return {
            user: {
                id: result._id,
                name: result.name,
                email:result.email,
                role: result.role
            },
            token,
        }
    }

    async login(data: any){
        const user = await this.repository.findEmail(data.email);
        if(!user){
            throw new Error('Usuario no existe');
        }

        const isValidPassword = await comparePassword(data.password, user.password);

         if(!isValidPassword){
            throw new Error('Credenciales son invalidas');
        }

         const token = signToken({
            sub: user._id!.toString(),
            email: user.email,
            role: user.role
        });

        return {
            user: {
                id: user._id,
                name: user.name,
                email:user.email,
                role: user.role
            },
            token,
        }
    }

}