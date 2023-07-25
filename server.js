const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

var porta = process.env.PORT;
// Configuração do servidor
app.engine('mustache', mustacheExpress());
app.set('trust proxy', true);
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Importar rotas
const routes = require('./routes');

// Usar as rota
app.use('/', routes);

// Inicie o servidor
app.listen(porta, () => {
  console.log(`Servidor iniciado na porta ${porta}`);
});

