import bcrypt from "bcrypt";

const saltRounds = 10;

export const hashPassword = async (passwordPlaintext: string): Promise<string> => {
    return bcrypt.hash(passwordPlaintext, saltRounds);
}

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(password, hash);
}