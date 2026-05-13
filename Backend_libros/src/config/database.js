"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDb = exports.connectDB = void 0;
const mongodb_1 = require("mongodb");
const env_1 = require("./env");
let client;
let db;
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    client = new mongodb_1.MongoClient(env_1.env.mongoUri);
    yield client.connect();
    db = client.db(env_1.env.mongoDbName);
    console.log('Mongo se conecto!!!');
});
exports.connectDB = connectDB;
const getDb = () => {
    if (!db) {
        throw new Error('La base de datos no ha sido inicializada');
    }
    return db;
};
exports.getDb = getDb;
