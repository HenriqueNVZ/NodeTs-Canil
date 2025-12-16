//Importa as dependencias do projeto:

//framework para criar servidores HTTP e gerenciar rotas.
import express from 'express';
//- carrega variáveis de ambiente de um arquivo .env para process.env.
import dotenv from 'dotenv';
//motor de templates que permite renderizar páginas HTML dinâmicas usando Mustache.
import mustache from 'mustache-express';
//módulo nativo do Node.js para manipular caminhos de arquivos e diretórios.
import path from 'path';

import { fileURLToPath } from 'url';

import mainRoutes from './routes/index.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Carrega o arquivo .env do projeto e carrega váriaveis em process.env
dotenv.config()

const server = express();

//Define o motor de teamplates
server.set('view engine','mustache');
//Define o diretório onde estão os templates (views)
server.set('views',path.join(__dirname,'views'));
//registra um motor de template (template engine) no Express.
server.engine('mustache',mustache());
// configurar o middleware de arquivos estáticos
server.use(express.static(path.join(__dirname,'../public')))

server.use(mainRoutes)

server.use((req,res) => {
    res.render('Pages/404');
})

//ROTAS
const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
