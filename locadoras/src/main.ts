import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC, 
    options: {
      url: "0.0.0.0:50051",
      package: 'locadoras',
      protoPath: join(__dirname, 'proto/locadoras.proto'),
    },
  })
  

  await app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();
