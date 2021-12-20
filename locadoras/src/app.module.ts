import { Module, PayloadTooLargeException } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { IAppService } from './app.service.interface';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.KEYCLOck_CLIENTE_SECRET,
     
    }),
    // KeycloakConnectModule.register({
    //   authServerUrl: process.env.AUTH_SERVER_URL,
    //   realm: 'Rent a Car',
    //   clientId: 'auth-locadoras',
    //   secret: '3bbf05bd-1502-4081-be47-88c0657f25f5',
    //   realmPublicKey: process.env.JWT_PUBLIC_ENV
    // }),
  ClientsModule.registerAsync([
    {
      name: "KAFKA_SERVICE",
      useFactory: () =>({
        transport: Transport.KAFKA,
        options: {
          client: {
          clientId: process.env.KAFKA_CLIENTE_ID,
          brokers: [process.env.KAFKA_HOST],
        }
      }
    })
  }
  ]),
    AuthModule
  ],
  controllers: [AppController],
  providers: [
    {
      provide: 'IAppService',
      useClass: AppService
    }
    
],
})
export class AppModule {}
