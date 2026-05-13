import { MongoClient, Db } from "mongodb";
import { env } from "./env";

let client: MongoClient;
let db: Db;

export const connectDB = async (): Promise<void> => {
    client = new MongoClient(env.mongoUri);
    await client.connect();
    db = client.db(env.mongoDbName);
    console.log('Mongo se conecto!!!')
}

export const getDb = (): Db => {
    if (!db) {
        throw new Error('La base de datos no ha sido inicializada');
    }
    return db;
}