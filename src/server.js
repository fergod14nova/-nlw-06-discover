const express = require('express')
const route = require('./route')
const path = require('path')

// Executando o express dentro de uma constante
const server = express()

server.set('view engine', 'ejs')
// Definindo a engine que será usada para mostrar as rotas e renderizar

server.set('views', path.join(__dirname, 'views'))
// o comando acima está procurando o local aonde está a pasta views, e informando para a variável servidor


server.use(route)
// Atribuindo o arquivo route para o servidor

// falando para o node que estamos usando a pasta public, dito isso  os arquivos CSS e IMG serão vistos pelo site
server.use(express.static("public"))

// Iniciando...
server.listen(3000, () => console.log("Server rodando..."));
//listen define a porta
//Ali em cima estou usando arroy functions para enviar hello wolrd