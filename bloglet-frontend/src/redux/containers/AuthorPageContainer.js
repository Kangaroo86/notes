import { branch, lifecycle, renderComponent } from 'recompose';
import { connect } from 'react-redux';

import { get } from '../../utils/ObjectUtils';
import AuthorPage from '../../components/AuthorPage';
import ErrorPage from '../../components/ErrorPage';
import InitializeAuthorPageProcess from '../processes/InitializeAuthorPageProcess';
import LogoutProcess from '../processes/LogoutProcess';
import selectAuthenticatedUser from '../selectors/selectAuthenticatedUser';
import selectUserById from '../selectors/selectUserById';

function mapStateToProps(state, ownProps) {
  const authorId = parseInt(get(ownProps, 'match.params.authorId'), 10);
  return {
    authorId,
    author: selectUserById(state, authorId),
    authenticatedUser: selectAuthenticatedUser(state),
    errorCode: state.errorCode
  };
}

function mapDispatchToProps(dispatch) {
  return {
    initialize: props => dispatch(InitializeAuthorPageProcess.create(props)),
    logout: () => dispatch(LogoutProcess.create())
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const addLifecycle = lifecycle({
  componentDidMount() {
    this.props.initialize(this.props);
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.authorId !== this.props.authorId) {
      this.props.initialize(nextProps);
    }
  }
});

const addErrorCheck = branch(
  ({ errorCode }) => /.ERROR_/.test(errorCode),
  renderComponent(ErrorPage)
);

export default connectToStore(addLifecycle(addErrorCheck(AuthorPage)));
