import Knex from 'knex';

// Table to store if the student tried to get in touch with the teacher

export async function up(knex: Knex) {
  return knex.schema.createTable('connections', table => {
    table.increments('id').primary();
  
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

      // Table to say when the connections were made 
      table.timestamp('created_at')
        .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
        .notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('connections');
}