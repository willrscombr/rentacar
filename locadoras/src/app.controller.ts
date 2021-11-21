import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller, Inject, Post, Get, Param } from '@nestjs/common';
import { ClientKafka, GrpcMethod } from '@nestjs/microservices';
import { v4 as uuidv4 } from 'uuid';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    @Inject('KAFKA_SERVICE') private readonly client: ClientKafka
  ) { }

  @GrpcMethod('LocadoraService', 'buscarVeiculosParaLocacaoPorPeriodo')
  buscarVeiculosParaLocacaoPorPeriodo(data, metadata: Metadata, call: ServerUnaryCall<any, any>) {

    console.log('dados', data)
    return {
      id: 1, nomeLocadora: "LOClALIZA", nomeVeiculo: "Fiat Uno 1",
      precoDiaria: "100,00"
    }
  }

  @Post("/veiculos")
  cadastrarVeiculoLocadoraDisponivel() {
    this.client.emit("CARRO_DISPONIVEL_LOCADORA", { "empresa": "Locailiza", carro: "GOL" })
    return "foi"
  }

  @Get("/locadoras")
  listarLocadoras() {

    return this.appService.listarLocadoras()

  }


  @Get("/locadoras/:locadoraNome")
  listarVeiculosParaAlugarPorPeriodoDisponivelECidade(@Param('locadoraNome') locadora: string) {
    const possiveisReservas = [
      {
        veiculoNome: "Chevrolet Onix ou Similar",
          valor: ((Math.random() + 1) * 1000).toFixed(2),
                localRetirada: "Aeroporto Afonso Pena",
        imagem: 'https://static.rentcars.com/imagens/carros/chevrolet_onix-2020-2021.png',
        locadora: 'Localiza',
        id: uuidv4()
      },
      {
        veiculoNome: "Fiat Mobi ou similar",
          valor: ((Math.random() + 1) * 1000).toFixed(2),
                localRetirada: "Aeroporto Afonso Pena",
        imagem: 'https://static.rentcars.com/imagens/carros/fiat_mobi-2020-2021.png',
        locadora: 'Localiza',
        id: uuidv4()

      },
      {
        veiculoNome: "Fiat Mobi ou similarr",
          valor: ((Math.random() + 1) * 1000).toFixed(2),
                localRetirada: "Aeroporto Afonso Pena",
        imagem: 'https://static.rentcars.com/imagens/carros/fiat_argo-2020-2021.png',
        locadora: 'Localiza',
        id: uuidv4()

      },
      {
        veiculoNome: "Chevrolet Onix ou Similar",
          valor: ((Math.random() + 1) * 1000).toFixed(2),
        localRetirada: "Aeroporto Afonso Pena",
        imagem: 'https://static.rentcars.com/imagens/carros/chevrolet_onix-2020-2021.png',
        locadora: 'Movida',
        id: uuidv4()
      },
      {
        veiculoNome: "Fiat Mobi ou similar",
          valor: ((Math.random() + 1) * 1000).toFixed(2),
                localRetirada: "Aeroporto Afonso Pena",
        imagem: 'https://static.rentcars.com/imagens/carros/fiat_mobi-2020-2021.png',
        locadora: 'Movida',
        id: uuidv4()

      },
      {
        veiculoNome: "Fiat Mobi ou similarr",
          valor: ((Math.random() + 1) * 1000).toFixed(2),
                localRetirada: "Aeroporto Afonso Pena",
        imagem: 'https://static.rentcars.com/imagens/carros/fiat_argo-2020-2021.png',
        locadora: 'Movida',
        id: uuidv4()

      }
    ]


   return possiveisReservas.filter( (reservas) => reservas.locadora.toLowerCase() == locadora)
  }
}
