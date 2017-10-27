const EntityController = require('./EntityController');

class ArticleController extends EntityController {
  constructor({ articleService, userService }) {
    super({
      entityName: 'Article',
      entityService: articleService
    });
    this._userService = userService;
    this._bindMethods(['findByAuthorId']);
  }

  async findByAuthorId(request, response, next) {
    try {
      const authorId = parseInt(request.params.authorId);
      const author = await this._userService.getById(authorId, {});
      const articles = await this._entityService.findByAuthorId(author.id);
      response.json(articles);
    } catch (error) {
      next(this._convertError(error));
    }
  }
}

module.exports = ArticleController;
