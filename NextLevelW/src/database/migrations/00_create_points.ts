//up serve para realizar alteração no banco
import Knex from 'knex';
//os tipos a gente importa o K maisculo
export async function up(knex: Knex) {
    //VAMOS CRIAR A TABELA
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
}
//METODO UTILIZADO PARA VOLTAR ATRAS
export async function down(knex: Knex) {
    //VAMOS DELETAR A TABELA
    return knex.schema.dropTable('point')
}