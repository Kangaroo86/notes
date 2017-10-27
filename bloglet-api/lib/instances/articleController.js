const ArticleController = require('../controllers/ArticleController');

module.exports = new ArticleController({
  articleService: require('./articleService'),
  userService: require('./userService')
});
