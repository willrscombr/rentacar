import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller, Inject, Post, Get, Param } from '@nestjs/common';
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


  @Get("/locadoras/:locadoraNome")
    listarVeiculosParaAlugarPorPeriodoDisponivelECidade(@Param('locadoraNome') locadora: string){
      return [
        { 
          veiculoNome: "Chevrolet Onix ou Similar",
          valor: 1568.63,
          localRetirada: "Aeroporto Afonso Pena",
          imagem: 'https://static.rentcars.com/imagens/carros/chevrolet_onix-2020-2021.png'
      },
      { 
        veiculoNome: "Fiat Mobi ou similar",
        valor: 1268.63,
        localRetirada: "Aeroporto Afonso Pena",
        imagem: 'https://static.rentcars.com/imagens/carros/fiat_mobi-2020-2021.png'
    
    },
    { 
      veiculoNome: "Fiat Mobi ou similarr",
      valor: 1568.63,
      localRetirada: "Aeroporto Afonso Pena",
      imagem: 'https://static.rentcars.com/imagens/carros/fiat_argo-2020-2021.png'
  
  }
      ]
  }
}
