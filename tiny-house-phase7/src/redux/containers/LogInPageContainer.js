import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import LogInPage from '../../components/LogInPage';

import getTokenProcess from '../thunks/getTokenProcess';

function mapStateToProps(state, ownProps) {
  return {
    listingItems: state.listingItems,
    hostInfo: state.hostInfo,
    userInfo: state.userInfo
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onLogIn: userInfo => dispatch(getTokenProcess(userInfo)),
    onLogOut: () =>
      dispatch({
        type: 'REMOVE_TOKEN',
        userInfo: null
      })
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

export default compose(connectToStore)(LogInPage);
