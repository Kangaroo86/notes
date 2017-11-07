import { branch, lifecycle, renderComponent } from 'recompose';
import { connect } from 'react-redux';

import ErrorPage from '../../components/ErrorPage';
import IndexPage from '../../components/IndexPage';
import InitializeIndexPageProcess from '../processes/InitializeIndexPageProcess';
import LogoutProcess from '../processes/LogoutProcess';
import selectAllArticles from '../selectors/selectAllArticles';
import selectAuthenticatedUser from '../selectors/selectAuthenticatedUser';

function mapStateToProps(state) {
  return {
    articles: selectAllArticles(state),
    authenticatedUser: selectAuthenticatedUser(state),
    errorCode: state.errorCode
  };
}

function mapDispatchToProps(dispatch) {
  return {
    initialize: props => dispatch(InitializeIndexPageProcess.create(props)),
    logout: () => dispatch(LogoutProcess.create())
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withLifecycle = lifecycle({
  componentDidMount() {
    this.props.initialize(this.props);
  }
});

const addErrorCheck = branch(
  ({ errorCode }) => /InitializeIndexPageProcess.ERROR_/.test(errorCode),
  renderComponent(ErrorPage)
);

export default connectToStore(withLifecycle(addErrorCheck(IndexPage)));
