import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import UpdateListingPage from '../../components/UpdateListingPage';

import updateListingProcess from '../thunks/updateListingProcess';

function mapStateToProps(state, ownProps) {
  return {
    listingItems: state.listingItems,
    hostInfo: state.hostInfo,
    error: state.error
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onUpdate: hostInfo => dispatch(updateListingProcess(hostInfo))
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
//export default compose(connectToStore, onDidMount)(UpdateListingPage);

export default compose(connectToStore)(UpdateListingPage);
