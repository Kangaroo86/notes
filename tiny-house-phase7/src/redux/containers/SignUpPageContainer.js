import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import SignUpPage from '../../components/SignUpPage';

import createUserProcess from '../thunks/createUserProcess';

function mapStateToProps(state, ownProps) {
  return {
    listingItems: state.listingItems,
    hostInfo: state.hostInfo,
    userInfo: state.userInfo,
    newUser: state.newUser
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSignUp: newUser => dispatch(createUserProcess(newUser))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

// We don't need onDidMount:
//
// const onDidMount = lifecycle({
//   componentDidMount() {
//     this.props.onMount();
//   }
// });
//
//Thus we don't need the following line:
//export default compose(connectToStore, onDidMount)(LogInPage);

export default compose(connectToStore)(SignUpPage);
