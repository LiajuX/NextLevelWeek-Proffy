import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('classes', table => {
    table.increments('id').primary();
    table.string('subject').notNullable();
    table.decimal('cost').notNullable();

    // Create the relation between the class given and which teacher gives it 
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      // If the teacher id changes in the users table, it'll be updated in all tables tha depends on it 
      .onUpdate('CASCADE')
      // If the teacher is deleted, the cascade means that all their classes are deleted as well
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('classes');
}