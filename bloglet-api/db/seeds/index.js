exports.seed = function(knex, Promise) {
  return Promise.resolve()
    .then(() => knex('Comment').del())
    .then(() => knex('Article').del())
    .then(() => knex('User').del())
    .then(() =>
      knex('User').insert(
        [
          {
            id: 1,
            username: 'admin',
            hashedPassword:
              '$2a$10$Z6BgoE6XmeAUdQV7ityeZOuNQ90430mEifbXTfY0uQE0tDDjIHdKy',
            role: 'ROLE_ADMIN',
            name: 'System Administrator',
            blurb: ''
          },
          {
            id: 2,
            username: 'nestor',
            hashedPassword:
              '$2a$10$Z6BgoE6XmeAUdQV7ityeZOuNQ90430mEifbXTfY0uQE0tDDjIHdKy',
            role: 'ROLE_STANDARD_USER',
            name: 'Nestor Toro',
            blurb: 'I like to write about software engineering and technology.'
          },
          {
            id: 3,
            username: 'roman',
            hashedPassword:
              '$2a$10$Z6BgoE6XmeAUdQV7ityeZOuNQ90430mEifbXTfY0uQE0tDDjIHdKy',
            role: 'ROLE_STANDARD_USER',
            name: 'Roman Toro',
            blurb: 'I like to write about life, art, and music.'
          }
        ],
        '*'
      )
    )
    .then(() =>
      knex.raw(`SELECT setval('"User_id_seq"', (SELECT MAX("id") FROM "User"))`)
    )
    .then(() =>
      knex('Article').insert([
        {
          id: 1,
          authorId: 2,
          title: 'My First Post',
          description: 'This is my first post. Enjoy!',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          id: 2,
          authorId: 3,
          title: "I'm here",
          description: 'So happy to post my first article.',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse faucibus interdum posuere lorem ipsum. Pellentesque dignissim enim sit amet venenatis urna cursus. Non nisi est sit amet. Elementum sagittis vitae et leo duis. Nisl rhoncus mattis rhoncus urna neque viverra justo. Sit amet massa vitae tortor. Ut diam quam nulla porttitor massa id neque. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. In iaculis nunc sed augue lacus viverra vitae congue. Libero enim sed faucibus turpis in. Amet purus gravida quis blandit turpis cursus. Mauris augue neque gravida in fermentum et sollicitudin ac. Eu lobortis elementum nibh tellus molestie. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Imperdiet proin fermentum leo vel orci porta non. Eleifend mi in nulla posuere. Sed felis eget velit aliquet. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Dolor purus non enim praesent.'
        }
      ])
    )
    .then(() =>
      knex.raw(
        `SELECT setval('"Article_id_seq"', (SELECT MAX("id") FROM "Article"))`
      )
    )
    .then(() =>
      knex('Comment').insert([
        {
          id: 1,
          userId: 2,
          articleId: 2,
          content: 'Such a great read!'
        },
        {
          id: 2,
          userId: 3,
          articleId: 2,
          content: 'I appreciate that! Thank you.'
        },
        {
          id: 3,
          userId: 3,
          articleId: 1,
          content: "Congrats! Keep writing. You're very insightful!"
        },
        {
          id: 4,
          userId: 2,
          articleId: 1,
          content: 'Thanks! I appreciate the kind words.'
        }
      ])
    )
    .then(() =>
      knex.raw(
        `SELECT setval('"Comment_id_seq"', (SELECT MAX("id") FROM "Comment"))`
      )
    );
};
