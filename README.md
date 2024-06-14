# Projeto Prático da C2: API com NodeJS, Typescript, Prisma e Express

Este projeto prático da C2 é a implementação de uma API utilizando NodeJS, Typescript, Prisma e Express como servidor, juntamente com um banco de dados de sua escolha (sugestão: SQLite). O projeto segue os moldes do que foi feito em sala de aula, implementando o padrão MVC (Model-View-Controller) para os modelos existentes no Prisma Quickstart e adicionando um modelo para Comentários.

## Tecnologias Utilizadas

- **NodeJS**: Plataforma de desenvolvimento para construir aplicações escaláveis em JavaScript.
- **Typescript**: Superset de JavaScript que adiciona tipagem estática ao código.
- **Prisma**: ORM moderno e intuitivo para NodeJS e TypeScript.
- **Express**: Framework web rápido, flexível e minimalista para Node.js.
- **Banco de Dados**: Você pode escolher o banco de dados de sua preferência. A sugestão é utilizar o SQLite.
- ThunderClient: Extensão para Visual Studio Code utilizada para testar as rotas da API durante o desenvolvimento.

## Estrutura do Projeto

O projeto segue o padrão MVC:

- **Model**: Representa a estrutura dos dados e a lógica de negócios. Utiliza o Prisma para definir os modelos de dados.
- **View**: Não aplicável neste projeto de API.
- **Controller**: Gerencia a comunicação entre os Models e as rotas da aplicação, processando as requisições e respostas.

## Modelos

Os modelos utilizados são baseados no Prisma Quickstart e foram estendidos para incluir o modelo de Comentários.

### Modelo de Comentários

Um Comentário possui as seguintes características:

- Pertence a um Post (um Post possui vários Comentários).
- Pertence a um Usuário (um Usuário pode fazer vários Comentários).

## Configuração e Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/victorfpaulino/Trabalho_C2_Web2.git
   
2. **Instale as dependênciaso**

   ```bash
   npm install

3. **Configure o Prisma**

-  Crie e configure o arquivo .env na raiz do projeto para definir a conexão com o banco de dados.
-  Execute as migrações do Prisma para criar as tabelas no banco de dados.

   ```bash
   npx prisma migrate dev --name init
   
5. **Inicie o servidor**

   ```bash
   npm run dev
  
