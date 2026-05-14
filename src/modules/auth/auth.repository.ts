import { ObjectId } from "mongodb"; // Necesario para buscar por _id
import { getDb } from "../../config/database";
import { User } from "../users/users.model";

export class AuthRepository {
    private collection() {
        return getDb().collection<User>('users')
    }

    async findEmail(email: string): Promise<User | null> {
        return this.collection().findOne({ email })
    }

    async create(user: User): Promise<User> {
        const result = await this.collection().insertOne(user)
        return { _id: result.insertedId, ...user }
    }

    async findById(id: string): Promise<User | null> {
        // Convertimos el string que viene del service en un ObjectId de MongoDB
        return this.collection().findOne({ _id: new ObjectId(id) });
    }

    async update(id: string, data: Partial<User>): Promise<User | null> {
        // Actualizamos los campos y pedimos que nos devuelva el documento nuevo
        const result = await this.collection().findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: data },
            { returnDocument: 'after' } // Esto es el equivalente al { new: true } de Mongoose
        );
        
        return result; 
    }

    async delete(id: string): Promise<boolean> {
        const result = await this.collection().deleteOne({ _id: new ObjectId(id) });
        return result.deletedCount === 1;
    }
}