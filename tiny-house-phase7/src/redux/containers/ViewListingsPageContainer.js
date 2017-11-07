import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import ViewListingsPage from '../../components/ViewListingsPage';

import getOneListingProcess from '../thunks/getOneListingProcess';
import getListingsProcess from '../thunks/getListingsProcess';
import getSortedFilteredListingsProcess from '../thunks/getSortedFilteredListingsProcess';

function mapStateToProps(state, ownProps) {
  return {
    listingItems: state.listingItems,
    hostInfo: state.hostInfo
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  //somewhere in ownProps is backyardId so don't need function onLove
  //given backyardId, LOOK UP the correct host
  return {
    onMount: () => dispatch(getListingsProcess()),
    onLove: hostInfo => dispatch(getOneListingProcess(hostInfo)),
    onSearch: (sort, filter) =>
      dispatch(getSortedFilteredListingsProcess(sort, filter))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(ViewListingsPage);
