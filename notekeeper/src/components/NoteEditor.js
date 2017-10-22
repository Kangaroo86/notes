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
    const { note } = this.props;
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
          {note.id &&
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
    const { onSave, note } = this.props;
    const $form = event.target;
    const title = $form.titleInput.value.trim();
    const body = $form.bodyInput.value.trim();
    const id = note.id;
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
    const { onDelete, note } = this.props;
    const id = note.id;
    onDelete({ id });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.note && nextProps.note.id !== this.props.noteId) {
      this.setState({
        noteId: nextProps.note.id,
        title: nextProps.note.title,
        body: nextProps.note.body
      });
    }
  }
}
