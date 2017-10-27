CREATE TABLE "User" (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  "timeCreated" TIMESTAMP NOT NULL,
  "timeModified" TIMESTAMP
);

CREATE TABLE "Article" (
  id SERIAL PRIMARY KEY,
  "authorId" INTEGER NOT NULL REFERENCES "User" (id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  "timeCreated" TIMESTAMP NOT NULL,
  "timeModified" TIMESTAMP
);

CREATE TABLE "Comment" (
  id SERIAL PRIMARY KEY,
  "commenterId" INTEGER NOT NULL REFERENCES "User" (id) ON DELETE CASCADE,
  "articleId" INTEGER NOT NULL REFERENCES "Article" (id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  "timeCreated" TIMESTAMP NOT NULL,
  "timeModified" TIMESTAMP
);
