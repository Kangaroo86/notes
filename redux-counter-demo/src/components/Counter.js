import React, { PureComponent } from 'react';

export default class Counter extends PureComponent {
  render() {
    return (
      <div className="Counter">
        <div className="Counter-count">
          {this.props.count}
        </div>
        <div className="Counter-buttons">
          <button onClick={this._handleClickIncrement}>+</button>
          <button onClick={this._handleClickDecrement}>-</button>
        </div>
      </div>
    );
  }

  _handleClickIncrement = event => {
    event.preventDefault();
    this.props.onIncrement();
  };

  _handleClickDecrement = event => {
    event.preventDefault();
    this.props.onDecrement();
  };
}
