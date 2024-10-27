import { forwardRef, Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersController } from "src/controllers/users/users.controller";
import { Role } from "src/models/roles/role.model";
import { UserRoles } from "src/models/roles/user-roles.model";
import { User } from "src/models/users/users.model";
import { RolesService } from "src/services/roles/role.service";
import { UsersService } from "src/services/users/users.service";
import { RolesModule } from "../roles/role.module";
import { AuthModule } from "../auth/auth.modules";


@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [
        SequelizeModule.forFeature([User, Role, UserRoles]),
        RolesModule,
        forwardRef(() => AuthModule)
    ],
    exports: [
        UsersService,
    ]
})
export class UsersModule {}