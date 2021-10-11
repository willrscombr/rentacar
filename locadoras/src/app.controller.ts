import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('LocadoraService','buscarVeiculosParaLocacaoPorPeriodo')
  buscarVeiculosParaLocacaoPorPeriodo(data, metadata: Metadata, call: ServerUnaryCall<any,any>){
    
    console.log('dados', data)
    return { id: 1,  nomeLocadora: "LOClALIZA",nomeVeiculo: "Fiat Uno 1",
       precoDiaria: "100,00"}
  }
}
