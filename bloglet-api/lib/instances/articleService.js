const ArticleService = require('../services/ArticleService');

const { DEBUG } = require('../../env');

module.exports = new ArticleService({
  articleValidator: require('./articleValidator'),
  articleRepository: require('./articleRepository'),
  userRepository: require('./userRepository'),
  logError: DEBUG ? console.error : undefined // eslint-disable-line no-console
});
