import { forwardRef, Module } from "@nestjs/common";
import { AuthController } from "src/controllers/auth/auth.controller";
import { AuthService } from "src/services/auth/auth.service";
import { UsersModule } from "../users/users.module";
import { JwtModule } from "@nestjs/jwt";


@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [
        forwardRef(() => UsersModule),
        JwtModule.register({
            secret: process.env.PRIVATE_KEY || "SECRET",
            signOptions: {
                expiresIn: '24h'
            }
        })
    ],
    exports: [
        AuthService,
        JwtModule
    ]
})
export class AuthModule {}