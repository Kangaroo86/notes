import React, { Component } from 'react';

import { isString } from '../utils/LangUtils';

let instanceCounter = 0;

export default class ArticleEditForm extends Component {
  static defaultProps = {
    onSubmit: () => {}
  };

  constructor(props) {
    super(props);
    ++instanceCounter;
    this.state = {
      inputs: {}
    };
  }

  render() {
    const id = this.props.id || `ArticleEditForm${instanceCounter}`;
    return (
      <form id={id} className="ArticleEditForm" onSubmit={this._handleSubmit}>
        <div className="ArticleEditForm-inputWrapper">
          <label
            className="ArticleEditForm-inputLabel"
            htmlFor={`${id}-titleInput`}>
            Title
          </label>
          <input
            type="text"
            id={`${id}-titleInput`}
            className="ArticleEditForm-input"
            name="titleInput"
            value={
              isString(this.state.inputs.title)
                ? this.state.inputs.title
                : this.props.article.title
            }
            onChange={this._handleChangeInput}
          />
        </div>
        <div className="ArticleEditForm-inputWrapper">
          <label
            className="ArticleEditForm-inputLabel"
            htmlFor={`${id}-descriptionInput`}>
            Description
          </label>
          <input
            type="text"
            id={`${id}-descriptionInput`}
            className="ArticleEditForm-input"
            name="descriptionInput"
            value={
              isString(this.state.inputs.description)
                ? this.state.inputs.description
                : this.props.article.description
            }
            onChange={this._handleChangeInput}
          />
        </div>
        <div className="ArticleEditForm-inputWrapper">
          <label
            className="ArticleEditForm-inputLabel"
            htmlFor={`${id}-contentInput`}>
            Content
          </label>
          <textarea
            type="text"
            id={`${id}-contentInput`}
            className="ArticleEditForm-input"
            name="contentInput"
            value={
              isString(this.state.inputs.content)
                ? this.state.inputs.content
                : this.props.article.content
            }
            onChange={this._handleChangeInput}
          />
        </div>
        <div className="ArticleEditForm-buttons">
          <input
            className="ArticleEditForm-button"
            type="submit"
            value="Save"
          />
          <input
            className="ArticleEditForm-button"
            type="reset"
            value="Reset"
            onClick={this._handleClickReset}
          />
        </div>
      </form>
    );
  }

  _handleClickReset = event => {
    event.preventDefault();
    this.setState(currentState => {
      return {
        ...currentState,
        inputs: {}
      };
    });
  };

  _handleChangeInput = event => {
    event.preventDefault();
    const inputName = event.target.name.replace('Input', '');
    const inputValue = event.target.value;
    this.setState(currentState => {
      return {
        ...currentState,
        inputs: {
          ...currentState.inputs,
          [inputName]: inputValue
        }
      };
    });
  };

  _handleSubmit = event => {
    event.preventDefault();
    const { titleInput, descriptionInput, contentInput } = event.target;
    this.props.onSubmit({
      title: (titleInput.value || '').trim(),
      description: (descriptionInput.value || '').trim(),
      content: (contentInput.value || '').trim()
    });
  };
}
