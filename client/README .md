# MB Energy

Aplicação consome 3 APIs diferentes além da API criada para a página dos clientes.
Aplicação 100% responsiva, segue práticas Clean Code de separação de responsabilidades 
e tem design bem amigável.
## Tech Stack

**Client:** React, TypeScript, SASS, MUI

**Server:** Node, Express, Mongo DB, Typescript


## Features

- Loading Spinner para mostrar pro usuário que a página está sendo carregada
- Loading Icon customizado com CSS Animations.
- Possibilidade de salvar sessão do usuário.
- Paginação na página de usuários e de clientes
- Serviço de autenticação com bcrypt para encriptografar a senha
- Validação de dados com biblioteca YUP
- Implementação de Regras de Negócio (email e cpf não podem ter duplicações)
- CRUD com Mongo DB para a página de clientes
## Installation

Instale meu projeto com:
- npm 
    
## How to Run

Digite os seguintes comandos:
- npm start para iniciar o front-end
- npm devStart para iniciar o back-end
- a senha do DB é a igual ao username da aplicação.
 - Substitua-a em server/src/utils/loaders/mongoose.
 

## API Reference

### HTTP CAT
- retorna um status code a escolha do usuário
### RANDOM DOG
- retorna uma imagem aleatória de um cachorro
### RANDOM USER GENERATOR
- retorna informações de usuários fictícios
### MB ENERGY CLIENT API
- Responsevel pelo CRUD da página de clientes
#### USAGE 
 - /client - GET => buscar todos os clientes
 - /client - POST => adicionar um novo cliente
 - /client/:id - GET => buscar cliente pelo id
 - /client/:id - PUT => atualizar cliente
 - /client/:id - DELETE => deletar cliente





## Environment Variables

Para rodar essa aplicação, é necessário as seguintes env variables:
`PORT`
`MONGOOSE_DB_PASSWORD`
`REACT_APP_SERVER_URL`


## Appendix

Video: 

