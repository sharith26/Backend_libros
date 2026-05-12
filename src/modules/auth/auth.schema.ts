import { Schema, model } from 'mongoose';
import { User } from './auth.model';

const UserSchema = new Schema<User>({
    nombre: { 
        type: String, 
        required: [true, 'El nombre es obligatorio'] 
    },
    email: { 
        type: String, 
        required: [true, 'El correo es obligatorio'], 
        unique: true // Esto evita correos duplicados
    },
    password: { 
        type: String, 
        required: [true, 'La contraseña es obligatoria'] 
    },
    role: { 
        type: String, 
        enum: ['USER_ROLE', 'ADMIN_ROLE'], 
        default: 'USER_ROLE' 
    }
}, {
    timestamps: true 
});

export const UserModel = model<User>('User', UserSchema);