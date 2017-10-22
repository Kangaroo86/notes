import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import IndexPage from '../../components/IndexPage';

import GetArticlesProcess from '../processes/GetArticlesProcess';

function mapStateToProps(state) {
  const { articlesById, articleIds } = state;
  const articles = Array.isArray(articleIds)
    ? articleIds.map(articleId => articlesById[articleId])
    : null;
  return {
    articles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDidMount: () => dispatch(GetArticlesProcess.create())
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withLifecycle = lifecycle({
  componentDidMount() {
    this.props.onDidMount();
  }
});

export default compose(connectToStore, withLifecycle)(IndexPage);
