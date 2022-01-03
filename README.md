[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=willtecti_rentacar&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=willtecti_rentacar)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=willtecti_rentacar&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=willtecti_rentacar)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=willtecti_rentacar&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=willtecti_rentacar)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=willtecti_rentacar&metric=coverage)](https://sonarcloud.io/summary/new_code?id=willtecti_rentacar)
# Rent a car

## Software para estudos de algumas tecnologias, focado em escalabilidade.


## Objetivo: Construir uma plataforma de alugel de carros simulando a buscar em diversas locadoras  de veículo do país.

## Ferramentas

### Levantamento de requisitos e e documentação

- Estória de usuários
- BDD
- Prototipação.

### Programação

- Nest.js
- Next.js
- RabbitMQ
- Apache Kafka
- GRPC
- REST
- Keyclock

### Técnicas ágeis

- TDD

### Arquiteturas e Design

- DDD





## Estórias de usuário

### EU001

- Como motorista desejo informar data de aluguel e local de retirada do veículo e saber o valor do aluguel na locadora mais barata.
- Como motorisda desejo que depois de buscar os dados dos veículos nas locadores, mostre as classes dos veículos com o menor preço e ao selecionar a classe
liste os veículos em ordem crescente de preço informando a locadora, o veículo e o preço.


### Domínios

 - Reservas
 - Locadoras
 - Veiculos
