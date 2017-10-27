exports.up = function(knex) {
  return knex.schema.createTable('User', table => {
    table.increments();
    table
      .timestamp('timeCreated')
      .notNullable()
      .default(knex.fn.now());
    table.timestamp('timeModified');
    table
      .text('username')
      .notNullable()
      .unique();
    table
      .specificType('hashedPassword', 'char(60)')
      .notNullable()
      .defaultTo('');
    table
      .text('role')
      .notNullable()
      .defaultTo('ROLE_STANDARD_USER');
    table.text('name').notNullable();
    table.text('blurb');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('User');
};
