const express = require('express');
// Inportando express

const route = express.Router();
// Colocando as rotas dentro da variável route, 'Router()' é um método do express

route.get('/', (req, res) => res.render("index"));
/*
criando rota para o index.EJS
*/

module.exports = route;
// Exportando a função, se não fizer isso a const não poderá ser usada em outros arquivos