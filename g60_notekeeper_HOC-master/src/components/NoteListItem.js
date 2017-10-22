import React, { Component } from 'react';

import classNames from 'classnames';

export default class NoteListItem extends Component {
  static defaultProps = {
    note: {},
    selected: false,
    onSelect: () => {}
  };

  render() {
    const { note, selected } = this.props;
    const containerClassNames = classNames('NoteListItem', { selected });
    return (
      <div className={containerClassNames}>
        <a
          className="NoteListItem-clickable"
          href={`#note-${note.id}`}
          onClick={this._handleClick}>
          {note.title}
        </a>
      </div>
    );
  }

  _handleClick = event => {
    event.preventDefault();
    const { note, onSelect } = this.props;
    onSelect(note.id);
  };
}
