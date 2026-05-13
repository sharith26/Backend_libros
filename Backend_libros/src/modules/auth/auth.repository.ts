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

}