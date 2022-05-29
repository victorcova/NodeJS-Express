# NodeJS-Express
 Curso Tera - Treinamento de NodeJS com módulo Express

ExpressJS: é a biblioteca mais famosa do NodeJS.
É um módulo que facilita o trabalho do DEV na web, com diversas funcionalidades, sem precisar lidar com HTTP diretamente.
Ao instalar o Express você já adiquire um sistema de rotas robusto, tratativa otimizada de erros, gerencia o módulo HTTP (que é outro módulo do Node), possui sistemas de templates para fazer visualizações do site e permite escrever menos código.
O express cria um servidor de comunicação (requisição e resposta).

-> Criando um servidor no Express (index.js):

const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`O servidor está disponível em http://localhost:${port}`)
})