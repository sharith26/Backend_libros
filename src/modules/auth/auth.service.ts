import { AuthRepository } from "./auth.repository";
// Importamos el User que ya tienes definido para evitar conflictos
import { User } from "./auth.model"; 
import { hashPassword, comparePassword } from "../../libs/bcrypt";
import { signToken } from "../../libs/jwt";

export class AuthService {

    private repository = new AuthRepository();

    async register(user: User) {
        const exists = await this.repository.findEmail(user.email);

        if (exists) {
            throw new Error('el usuario ya existe');
        }

        const hashedPassword = await hashPassword(user.password!);

        const newUser: any = {
            ...user,
            password: hashedPassword,
            role: 'user'
        };

        const result = await this.repository.create(newUser);

        const token = signToken({
            sub: result._id!.toString(),
            email: result.email,
            role: result.role
        });

        return {
            user: {
                id: result._id,
                name: (result as any).nombre || (result as any).name,
                email: result.email,
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

        const isValidPassword = await comparePassword(data.password, user.password!);

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
                name: (user as any).nombre || (user as any).name,
                email: user.email,
                role: user.role
            },
            token,
        }
    }

    async getProfile(id: string) {
        const user = await this.repository.findById(id);
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        // Retornamos el usuario (el repositorio debería encargarse de limpiar el password)
        return user;
    }

    async updateUser(id: string, data: any) {
        // Si el usuario envía un nuevo password, lo encriptamos antes de guardar
        if (data.password) {
            data.password = await hashPassword(data.password);
        }

        const result = await this.repository.update(id, data);
        if (!result) {
            throw new Error('No se pudo actualizar el usuario');
        }
        return result;
    }

    async deleteUser(id: string) {
        const result = await this.repository.delete(id);
        if (!result) {
            throw new Error('No se pudo eliminar el usuario o no existe');
        }
        return result;
    }
}