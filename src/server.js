// importando o express3
const express = require('express');

// Executando o express dentro de uma constante
const server = express();

// Iniciando...
server.listen(3000, () => console.log("Hello World!"));
//listen define a porta
//Ali em cima estou usando arroy functions para enviar hello wolrd