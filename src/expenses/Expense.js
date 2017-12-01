import React, { PureComponent } from 'react';

export default class Expense extends PureComponent {
  render() {
    const { name, value } = this.props;
    return (
      <li>
        <span>{name}:</span>
        <span>${value}</span>
      </li>
    );
  }
}
