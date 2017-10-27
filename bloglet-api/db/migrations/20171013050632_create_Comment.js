exports.up = function(knex) {
  return knex.schema.createTable('Comment', table => {
    table.increments();
    table
      .timestamp('timeCreated')
      .notNullable()
      .default(knex.fn.now());
    table.timestamp('timeModified');
    table
      .integer('userId')
      .notNullable()
      .references('User.id')
      .index()
      .onDelete('CASCADE');
    table
      .integer('articleId')
      .notNullable()
      .references('Article.id')
      .index()
      .onDelete('CASCADE');
    table.text('content').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('Comment');
};
