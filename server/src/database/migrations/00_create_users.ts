import Knex from 'knex';

// Method to do something
export async function up(knex: Knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('avatar').notNullable();
    table.string('whatsapp').notNullable();
    table.string('bio').notNullable();
  });
}

// Method to undo it if something goes wrong 
export async function down(knex: Knex) {
  return knex.schema.dropTable('users');
}