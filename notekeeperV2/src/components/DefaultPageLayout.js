import React, { Component } from 'react';

export default class DefaultPageLayout extends Component {
  static defaultProps = {
    onDeselectNote: () => {}
  };

  render() {
    const { children } = this.props;
    return (
      <div className="DefaultPageLayout">
        <div className="DefaultPageLayout-sideBar">
          <a
            className="DefaultPageLayout-deselectNoteLink"
            href="/"
            onClick={this._handleClick}>
            Create a new note
          </a>
          {children[0]}
        </div>
        {children[1]}
      </div>
    );
  }

  _handleClick = event => {
    event.preventDefault();
    this.props.onDeselectNote();
  };
}
