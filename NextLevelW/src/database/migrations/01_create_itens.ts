//up serve para realizar alteração no banco
import Knex from 'knex';
//os tipos a gente importa o K maisculo
export async function up(knex: Knex) {
    //VAMOS CRIAR A TABELA
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();

    });
}
//METODO UTILIZADO PARA VOLTAR ATRAS
export async function down(knex: Knex) {
    //VAMOS DELETAR A TABELA
    return knex.schema.dropTable('items')
}