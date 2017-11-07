import { branch, lifecycle, renderComponent } from 'recompose';
import { connect } from 'react-redux';

import ErrorPage from '../../components/ErrorPage';
import InitializeLoginPageProcess from '../processes/InitializeLoginPageProcess';
import LoginPage from '../../components/LoginPage';
import LoginProcess from '../processes/LoginProcess';
import selectAuthenticatedUser from '../selectors/selectAuthenticatedUser';

function mapStateToProps(state) {
  return {
    authenticatedUser: selectAuthenticatedUser(state),
    errorCode: state.errorCode
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    initialize: props => dispatch(InitializeLoginPageProcess.create(props)),
    login: credentials =>
      dispatch(LoginProcess.create(credentials, ownProps.history))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const addLifecycle = lifecycle({
  componentDidMount() {
    this.props.initialize(this.props);
  }
});

const addErrorCheck = branch(
  ({ errorCode }) =>
    errorCode === 'InitializeLoginPageProcess.ERROR_UNEXPECTED',
  renderComponent(ErrorPage)
);

export default connectToStore(addLifecycle(addErrorCheck(LoginPage)));
