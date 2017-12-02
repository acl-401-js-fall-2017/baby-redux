import React, { PureComponent } from 'react';
import ExpenseForm from './ExpenseForm';

export default class Expense extends PureComponent {

  handle

  render() {
    const { id, name, value, onUpdate, onDelete } = this.props;
    return (
      <li>
        <span>{name}:&nbsp;</span>
        <span>${value}</span>
        <ExpenseForm
          onComplete={onUpdate(id)}
          onDelete={onDelete(id)}
          buttonText="update"
        />
      </li>
    );
  }
}
