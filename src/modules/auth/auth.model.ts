export interface User {
    _id?: string;
    nombre: string;
    email: string;
    password?: string; 
    role: string;
    createdAt?: Date;
    updatedAt?: Date;
}