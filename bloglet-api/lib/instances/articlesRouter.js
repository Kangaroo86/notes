const express = require('express');
const Boom = require('boom');

const router = express.Router();

const articleController = require('./articleController');

router.post('/articles', articleController.create);
router.get('/articles', articleController.getAll);
router.all('/articles', (request, response, next) =>
  next(Boom.methodNotAllowed(null, null, ['OPTIONS', 'GET', 'POST']))
);

router.get('/users/:authorId(\\d+)/articles', articleController.findByAuthorId);
router.all('/users/:authorId(\\d+)/articles', (request, response, next) =>
  next(Boom.methodNotAllowed(null, null, ['OPTIONS', 'GET']))
);

router.get('/articles/:id(\\d+)', articleController.getById);
router.patch('/articles/:id(\\d+)', articleController.update);
router.delete('/articles/:id(\\d+)', articleController.delete);
router.all('/articles/:id(\\d+)', (request, response, next) =>
  next(Boom.methodNotAllowed(null, null, ['OPTIONS', 'GET', 'PATCH', 'DELETE']))
);

module.exports = router;
