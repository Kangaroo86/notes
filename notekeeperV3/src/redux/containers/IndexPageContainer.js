import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import IndexPage from '../../components/IndexPage';

import getNotesProcess from '../thunks/getNotesProcess';
import updateNoteProcess from '../thunks/updateNoteProcess';
import createNoteProcess from '../thunks/createNoteProcess';
import deleteNoteProcess from '../thunks/deleteNoteProcess';

function mapStateToProps(state, ownProps) {
  return {
    notes: state.notes,
    selectedNoteId: state.selectedNoteId
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(getNotesProcess()),
    onSelect: noteId => dispatch({ type: 'SELECT_NOTE', noteId }),
    onSave: ({ id, ...changes }) =>
      id
        ? dispatch(updateNoteProcess(id, changes))
        : dispatch(createNoteProcess(changes)),
    onDelete: ({ id }) => dispatch(deleteNoteProcess(id)),
    onDeselectNote: () => dispatch({ type: 'DESELECT_NOTE' })
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(IndexPage);
