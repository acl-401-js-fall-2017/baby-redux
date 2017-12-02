import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Expense from '../expenses/Expense';
import ExpenseForm from '../expenses/ExpenseForm';
import { addExpense, removeExpense } from '../expenses/actions';

class CategoryPage extends PureComponent {

  handleNewExpense = e => {
    e.preventDefault();
    this.props.addExpense(
      {
        name: e.target.name.value,
        value: e.target.budget.value
      },
      this.props.categoryId
    );
  }

  handleUpdateExpense = expenseId => e => {
    e.preventDefault();
    console.log('oopdate')

  }

  handleDeleteExpense = expenseId => () => {
    this.props.removeExpense(
      expenseId,
      this.props.categoryId
    );
  }

  render() {
    const { name, budget: totalBudget, expenses } = this.props;
    return (
      <div className={`Category-page ${name}`}>
        <h2>Expenses in Category: {name}<br/>
          <small>total budget: ${totalBudget}</small>
        </h2>
        <ExpenseForm
          onComplete={this.handleNewExpense}
          buttonText="Add"
        />
        <ul>
          {expenses.length > 0 &&
            expenses.map(expense => (
              <Expense 
                key={expense._id} 
                id={expense._id}
                name={expense.name} 
                value={expense.value}
                onUpdate={this.handleUpdateExpense}
                onDelete={this.handleDeleteExpense}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    loading: state.loading,
    error: state.error
  }),
  { addExpense, removeExpense }
)(CategoryPage);