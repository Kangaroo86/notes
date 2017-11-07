import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import DetailedListingPage from '../../components/DetailedListingPage';

function mapStateToProps(state, ownProps) {
  return {
    listingItems: state.listingItems,
    hostInfo: state.hostInfo,
    error: state.error
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClear: () =>
      dispatch({
        type: 'CLOSE_ONE_LISTING',
        hostInfo: null
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
//export default compose(connectToStore, onDidMount)(DetailedListingPage);

export default compose(connectToStore)(DetailedListingPage);
