import React, { PureComponent } from 'react';
import Expense from '../expenses/Expense';

export default class CategoryPage extends PureComponent {
  render() {
    const { name, budget: totalBudget, expenses } = this.props;
    return (
      <div className={`Category-page ${name}`}>
        <h2>{name}:<span> ${totalBudget}</span></h2>
        <ul>
          {expenses && expenses.length > 0 &&
            expenses.map(expense => (
              <Expense key={expense._id} name={expense.name} value={expense.value}/>
            ))
          }
        </ul>
      </div>
    );
  }
}