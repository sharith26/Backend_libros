import { UsersRepository } from "./users.repository";

export class UsersService {

    private repository = new UsersRepository();

    async register(data: any) {

        const exists = await this.repository.findByEmail(data.email);

        if (exists) {
            throw new Error('el usuario ya existe');
        }
        return this.repository.create(data);
    }

    async findAllUsers() {
        return this.repository.findAllUsers();
    }

}
