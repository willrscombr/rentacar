import { Module, PayloadTooLargeException } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
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
  ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
