import { UsersRepository } from "./users.repository";

export class UsersService {
    private _UsersRepository = new UsersRepository();

    async register(data: any) {
        return await this._UsersRepository.create(data);
    }

    async findAllUsers(filters: any = {}) {
        return await this._UsersRepository.findAllUsers(filters);
    }

    async updateUser(id: string, data: any) {
        return await this._UsersRepository.update(id, data);
    }

    async deleteUser(id: string) {
        return await this._UsersRepository.delete(id);
    }
}