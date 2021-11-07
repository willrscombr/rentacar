import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller, Inject, Post, Get } from '@nestjs/common';
import { ClientKafka, GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    @Inject('KAFKA_SERVICE') private readonly client: ClientKafka
    ) {}

  @GrpcMethod('LocadoraService','buscarVeiculosParaLocacaoPorPeriodo')
  buscarVeiculosParaLocacaoPorPeriodo(data, metadata: Metadata, call: ServerUnaryCall<any,any>){
    
    console.log('dados', data)
    return { id: 1,  nomeLocadora: "LOClALIZA",nomeVeiculo: "Fiat Uno 1",
       precoDiaria: "100,00"}
  }

  @Post("/veiculos")
  cadastrarVeiculoLocadoraDisponivel(){
    this.client.emit("CARRO_DISPONIVEL_LOCADORA", {"empresa": "Locailiza", carro: "GOL"})
    return "foi"
  }

  @Get("/locadoras")
  listarLocadoras(){

    return this.appService.listarLocadoras()
  }
}
