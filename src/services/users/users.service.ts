import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "src/dto/users/create-user.dto";
import { User } from "src/models/users/users.model";

@Injectable()
export class UsersService{

    constructor(@InjectModel(User) private userRepository: typeof User) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        return user;
    }

    async getAllUser() {
        const users = await this.userRepository.findAll();
        return users;
    }
}