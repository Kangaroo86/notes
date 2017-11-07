import { branch, lifecycle, renderComponent } from 'recompose';
import { connect } from 'react-redux';

import { get } from '../../utils/ObjectUtils';
import ArticleEditPage from '../../components/ArticleEditPage';
import ErrorPage from '../../components/ErrorPage';
import InitializeArticleEditPageProcess from '../processes/InitializeArticleEditPageProcess';
import LogoutProcess from '../processes/LogoutProcess';
import selectArticleById from '../selectors/selectArticleById';
import selectAuthenticatedUser from '../selectors/selectAuthenticatedUser';

function mapStateToProps(state, ownProps) {
  let articleId = parseInt(get(ownProps, 'match.params.articleId'), 10);
  return {
    articleId,
    article: selectArticleById(state, articleId),
    authenticatedUser: selectAuthenticatedUser(state),
    errorCode: state.errorCode
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    initialize: props =>
      dispatch(InitializeArticleEditPageProcess.create(props)),
    logout: () => dispatch(LogoutProcess.create())
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const addLifeCycle = lifecycle({
  componentDidMount() {
    this.props.initialize(this.props);
  },

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.authenticatedUser !== this.props.authenticatedUser ||
      nextProps.articleId !== this.props.articleId
    ) {
      this.props.initialize(nextProps);
    }
  }
});

const addErrorCheck = branch(
  ({ errorCode }) => /.ERROR_/.test(errorCode),
  renderComponent(ErrorPage)
);

export default connectToStore(addLifeCycle(addErrorCheck(ArticleEditPage)));
