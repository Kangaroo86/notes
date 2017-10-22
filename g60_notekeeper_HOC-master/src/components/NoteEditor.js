import React, { Component } from 'react';

export default class NoteEditor extends Component {
  static defaultProps = {
    note: {},
    onSave: () => {},
    onDelete: () => {}
  };

  constructor(props) {
    super(props);
    const { note } = this.props;
    this.state = {
      noteId: note.id,
      title: note.title,
      body: note.body
    };
  }

  render() {
    return (
      <form className="NoteEditor" onSubmit={this._handleSubmit}>
        <div className="NoteEditor-titleInputWrapper">
          <input
            className="NoteEditor-titleInput"
            type="text"
            name="titleInput"
            placeholder="Give your note a title..."
            value={this.state.title || ''}
            onChange={this._handleChangeInput}
          />
        </div>
        <div className="NoteEditor-bodyInputWrapper">
          <textarea
            className="NoteEditor-bodyInput"
            name="bodyInput"
            placeholder="Type your note here..."
            value={this.state.body || ''}
            onChange={this._handleChangeInput}
          />
        </div>
        <div className="NoteEditor-saveButtonWrapper">
          <button className="NoteEditor-saveButton" type="submit">
            Save
          </button>
          {this.state.noteId &&
            <button
              className="NoteEditor-deleteButton"
              onClick={this._handleClickDeleteButton}>
              Delete
            </button>}
        </div>
      </form>
    );
  }

  _handleSubmit = event => {
    event.preventDefault();
    const { onSave } = this.props;
    const $form = event.target;
    const title = $form.titleInput.value.trim();
    const body = $form.bodyInput.value.trim();
    const id = this.state.noteId;
    $form.reset();
    onSave({ id, title, body });
  };

  _handleChangeInput = event => {
    event.preventDefault();
    const $input = event.target;
    const inputName = $input.name.replace('Input', '');
    this.setState({
      [inputName]: $input.value
    });
  };

  _handleClickDeleteButton = event => {
    event.preventDefault();
    const { onDelete } = this.props;
    const id = this.state.noteId;
    onDelete({ id });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.note && nextProps.note.id !== this.props.note.id) {
      this.setState({
        noteId: nextProps.note.id,
        title: nextProps.note.title,
        body: nextProps.note.body
      });
    }
  }
}

// import React, { Component } from 'react';
//
// function withNoteEditorState(NoteEditor) {
//   return class NoteEditorWithState extends React.Component {
//     static defaultProps = {
//       note: {},
//       onSave: () => {},
//       onDelete: () => {}
//     };
//
//     constructor(props) {
//       super(props);
//       const { note } = this.props;
//       this.state = {
//         noteId: note.id,
//         title: note.title,
//         body: note.body
//       };
//     }
//
//     handleSubmit = event => {
//       event.preventDefault();
//       const { onSave } = this.props;
//       const $form = event.target;
//       const title = $form.titleInput.value.trim();
//       const body = $form.bodyInput.value.trim();
//       const id = this.state.noteId;
//       $form.reset();
//       onSave({ id, title, body });
//     };
//
//     handleChangeInput = event => {
//       event.preventDefault();
//       const $input = event.target;
//       const inputName = $input.name.replace('Input', '');
//       this.setState({
//         [inputName]: $input.value
//       });
//     };
//
//     handleClickDeleteButton = event => {
//       event.preventDefault();
//       const { onDelete } = this.props;
//       const id = this.state.noteId;
//       onDelete({ id });
//     };
//
//     componentWillReceiveProps(nextProps) {
//       if (nextProps.note && nextProps.note.id !== this.props.note.id) {
//         this.setState({
//           noteId: nextProps.note.id,
//           title: nextProps.note.title,
//           body: nextProps.note.body
//         });
//       }
//     }
//
//     render() {
//       const newProps = {
//         handleClickDeleteButton: this.handleClickDeleteButton,
//         handleChangeInput: this.handleChangeInput,
//         handleSubmit: this.handleSubmit,
//         title: this.state.title,
//         noteId: this.state.noteId,
//         body: this.state.body
//       }
//       return <NoteEditor {...this.props} {...newProps}/>
//     }
//   }
// }
//
// class NoteEditor extends Component {
//   render() {
//     return (
//       <form className="NoteEditor" onSubmit={this.props.handleSubmit}>
//         <div className="NoteEditor-titleInputWrapper">
//           <input
//             className="NoteEditor-titleInput"
//             type="text"
//             name="titleInput"
//             placeholder="Give your note a title..."
//             value={this.props.title || ''}
//             onChange={this.props.handleChangeInput}
//           />
//         </div>
//         <div className="NoteEditor-bodyInputWrapper">
//           <textarea
//             className="NoteEditor-bodyInput"
//             name="bodyInput"
//             placeholder="Type your note here..."
//             value={this.props.body || ''}
//             onChange={this.props.handleChangeInput}
//           />
//         </div>
//         <div className="NoteEditor-saveButtonWrapper">
//           <button className="NoteEditor-saveButton" type="submit">
//             Save
//           </button>
//           {this.props.noteId &&
//             <button
//               className="NoteEditor-deleteButton"
//               onClick={this.props.handleClickDeleteButton}>
//               Delete
//             </button>}
//         </div>
//       </form>
//     );
//   }
// }
//
// export default withNoteEditorState(NoteEditor)
