## Dev Bahia

Site para listar todos os eventos e oportunidades de TI que acontece na Bahia.

Este é uma iniciativa para compilar e exibir os eventos de TI que estão ocorrendo na Bahia, será um espaço aberto para contribuição de todas as pessoas Devs.

* [Material UI](https://material-ui.com)

#### Contribuindo

* Faça um fork do projeto
* Crie uma branch nova a partir do seu repositório
* Faça as alterações e proposições de melhoras
* Envie um PR para análise
* Crie issues com os bugs que encontrar 


## Instação

- O `codigo` é requerido para iniciar


### Clone

- Clone esse repositório para a sua máquina local `https://github.com/danieln/devbahia`

### Setup

- Passo a passo para o setup:

> atualize e instale os pacotes

```shell
$ yarn install 
```

> agora execute a aplicação

```shell
$ yarn start
```

### Testes

> executando os testes unitários

```shell
$ yarn test
```

> executando os testes unitários com coverage

```shell
$ yarn test:coverage
```

> executando os testes functionais localmente

```shell
$ yarn test:functional
```


### Usando o Docker

> primeiro execute o build da aplicação

```shell
$ yarn build
```

> executando no docker

```shell
$ docker build -t dev-bahia .
```
