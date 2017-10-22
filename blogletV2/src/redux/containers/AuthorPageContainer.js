import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import AuthorPage from '../../components/AuthorPage';

import GetUserProcess from '../processes/GetUserProcess';

function mapStateToProps(state, ownProps) {
  const { usersById } = state;
  const { authorId } = ownProps.match.params;
  const author = usersById[authorId] || null;
  return {
    author
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDidMount: ({ authorId }) =>
      dispatch(GetUserProcess.create({ userId: authorId }))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withLifecycle = lifecycle({
  componentDidMount() {
    const { authorId } = this.props.match.params;
    this.props.onDidMount({ authorId });
  }
});

export default compose(connectToStore, withLifecycle)(AuthorPage);
