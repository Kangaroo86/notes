exports.up = function(knex) {
  return knex.schema.createTable('Article', table => {
    table.increments();
    table
      .timestamp('timeCreated')
      .notNullable()
      .default(knex.fn.now());
    table.timestamp('timeModified');
    table
      .integer('authorId')
      .notNullable()
      .references('User.id')
      .index()
      .onDelete('CASCADE');
    table.text('title').notNullable();
    table.text('description');
    table.text('content').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('Article');
};
