import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { Roles } from "src/decorators/auth/roles-auth.decorator";
import { CreateUserDto } from "src/dto/users/create-user.dto";
import { JwtAuthGuard } from "src/guards/auth/jwt-auth.guard";
import { RolesGuard } from "src/guards/role/roles.guard";
import { UsersService } from "src/services/users/users.service";

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    @UseGuards(JwtAuthGuard)
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Get()
    getAll() {
        return this.usersService.getAllUser();
    }
}