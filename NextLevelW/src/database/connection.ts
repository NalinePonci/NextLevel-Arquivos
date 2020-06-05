import knex from 'knex';
import path from 'path'


const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
  },
  useNullAsDefault: true,
});

export default connection;

//tabelas
// N PRA N TABELA PIVOT
//POINTS (pontos de coleta)
/* |--imagem
     |--nome
       |--email
         |--whats
           |--latitude
             |--longitude
               |--cidade
                 |--uf
//ITENS (ITENS DE COLETA)
   |--imagem
     |--title
//POINT_ITENS (RELACIONAMENTO DOS ITENS )
   |-- point_id
     |-- itens_id
       |--
*/

//=============================
/*
VAMOS USAR O MIGRATIONS == HISTORICO DO BANCO DE DADOS
*/