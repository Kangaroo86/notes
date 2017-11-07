import { branch, lifecycle, renderComponent } from 'recompose';
import { connect } from 'react-redux';

import { get } from '../../utils/ObjectUtils';
import ArticlePage from '../../components/ArticlePage';
import ErrorPage from '../../components/ErrorPage';
import InitializeArticlePageProcess from '../processes/InitializeArticlePageProcess';
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

function mapDispatchToProps(dispatch) {
  return {
    initialize: props => dispatch(InitializeArticlePageProcess.create(props)),
    logout: () => dispatch(LogoutProcess.create())
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withLifecycle = lifecycle({
  componentDidMount() {
    this.props.initialize(this.props);
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.articleId !== this.props.articleId) {
      this.props.initialize(nextProps);
    }
  }
});

const addErrorCheck = branch(
  ({ errorCode }) => /.ERROR_/.test(errorCode),
  renderComponent(ErrorPage)
);

export default connectToStore(withLifecycle(addErrorCheck(ArticlePage)));
