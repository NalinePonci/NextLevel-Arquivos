// ROTA:   ENDEREÇO COMPLETO DA REQUISIÃO
// RECURSO: QUAL ENTIDADE ESTAMOS ACESSANDO NO SISTEMA
// GET :   GET SERVER QUANDO QUEREMOS BUSCAR UMA OU MAIS INFORMAÇÕES 
// POST:   POST E QUANDO QUEREMOS CRIAR UMA NOVA INFORMAÇÃO NO BACK-END (EXEMPLO CRIAÇÃO DE USUARIO)
// PUT:    SERVE QUANDO QUEREMOS ATUALIZAR UMA INFORMAÇÃO EXISTENTE NO BACK-END
// DELETE: QUANDO EU QUERO REMOVER UMA INFORMAÇÃO DO BACK-END
//==================================================================
//POST http://localhost:3333/users = CRIAR um usuario
//GET http://localhost:3333/users = LISTAR um usuario
//GET http://localhost:3333/users/5 = BUSCAR USUARIO PELO ID 5
//==================================================================
//request Param: paramestrtsoq eu vem da propria rota que identificam um recurso
//Query param : Parametros opcionais, parametros que vem na propria rota geralmente opcionais para filtros e paginação
//Request Body : parametros para criação/atualização de informação
//==================================================================
import express, { request } from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';
const app = express();

app.use(cors());
//estou colocando um funcionalidade no express
app.use(express.json())
app.use(routes);
app.use('/uploads',express.static(path.resolve(__dirname,'..','uploads')))

app.listen(3333);
