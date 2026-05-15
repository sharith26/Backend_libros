import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";

export class UsersRepository {
    private collection() {
        return getDb().collection('users');
    }

    async create(data: any) {
        const result = await this.collection().insertOne(data);
        return { _id: result.insertedId, ...data };
    }

    async findAllUsers(filters: any = {}) {
        const query: any = {};
        
        // Filtros dinámicos para Swagger
        if (filters.nombre) {
            query.nombre = { $regex: filters.nombre, $options: 'i' };
        }
        if (filters.email) {
            query.email = filters.email;
        }

        return this.collection().find(query).toArray();
    }

    async findByEmail(email: string) {
        return this.collection().findOne({ email });
    }

    async update(id: string, data: any) {
        // Usamos ObjectId para que MongoDB encuentre el documento correctamente
        const result = await this.collection().findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: data },
            { returnDocument: 'after' }
        );
        return result;
    }

    async delete(id: string) {
        const result = await this.collection().deleteOne({ _id: new ObjectId(id) });
        return result.deletedCount === 1;
    }
}