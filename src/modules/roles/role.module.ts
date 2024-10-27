import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { RolesController } from "src/controllers/roles/role.controller";
import { Role } from "src/models/roles/role.model";
import { UserRoles } from "src/models/roles/user-roles.model";
import { User } from "src/models/users/users.model";
import { RolesService } from "src/services/roles/role.service";

@Module({
    providers: [RolesService],
    controllers: [RolesController],
    imports: [
        SequelizeModule.forFeature([Role, User, UserRoles])
    ],
    exports: [
        RolesService
    ]
})
export class RolesModule {}