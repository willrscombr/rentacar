import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategyService } from './auth.strategy';


@Module({
    imports: [   
        ConfigModule.forRoot(),
        JwtModule.register({
            publicKey: process.env.JWT_PUBLIC_ENV,
            verifyOptions: { algorithms:['RS256']}
        }),
    ],
    providers: [
        JwtStrategyService
    ]
})
export class AuthModule {}
