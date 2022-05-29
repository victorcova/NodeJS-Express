const express = require('express'); // variavel express que importa o módulo Express
const app = express(); // variavel app que recebe a execução da biblioteca Express (o express invoca o módulo HTTP e cria por sí só o servidor)
const port = 3000; // definimos o nº da porta para nossa conexão

app.get('/',(req, res) => { // função GET que recebe o endereço e uma função que tem 2 argumentos req (requisição) e res (resposta)
    res.send('Hello World!'); // é a resposta para o cliente
})

app.listen(port, () => { // o método LISTEN escuta as requisições que chegarem na porta definida (3000 no caso) e com isso inicializamos a nossa aplicação Express.
    console.log(`O servidor está disponível em http://localhost:${port} <- CTTL+Clique para abrir`)
})