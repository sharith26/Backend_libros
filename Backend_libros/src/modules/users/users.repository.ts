import { getDb } from "../../config/database";

export class UsersRepository {
    private collection(){
        return getDb().collection('users')
    }

    async create(data:any){
        const result = await this.collection().insertOne(data);
        return { _id: result.insertedId, ...data }  
    }

    async findAllUsers(){
        return this.collection().find().toArray();
    }

    async findByEmail(email: string){
        return this.collection().findOne({email});
    }
}