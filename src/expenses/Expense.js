import React, { PureComponent } from 'react';
import ExpenseForm from './ExpenseForm';
import './Expense.css';

export default class Expense extends PureComponent {

  handle

  render() {
    const { id, name, value, onUpdate, onDelete } = this.props;
    return (
      <li>
        <h4>
          <span className="name">{name}:&nbsp;</span>
          <span className="value">${value}</span>
        </h4>
        <ExpenseForm
          onComplete={onUpdate(id)}
          onDelete={onDelete(id)}
          buttonText="update"
        />
      </li>
    );
  }
}
