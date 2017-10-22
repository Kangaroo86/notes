import { connect } from 'react-redux';
import { /*compose,*/ lifecycle } from 'recompose';

import ArticlePage from '../../components/ArticlePage';

import GetArticleProcess from '../processes/GetArticleProcess';

function mapStateToProps(state, ownProps) {
  // store.getState
  const { articlesById } = state;
  const { articleId } = ownProps.match.params;
  const article = articlesById[articleId] || null;
  return {
    article
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDidMount: ({ articleId }) =>
      dispatch(GetArticleProcess.create({ articleId }))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withLifecycle = lifecycle({
  componentDidMount() {
    const { articleId } = this.props.match.params;
    this.props.onDidMount({ articleId });
  }
});

// export default compose(connectToStore, withLifecycle)(ArticlePage);
export default connectToStore(withLifecycle(ArticlePage));
