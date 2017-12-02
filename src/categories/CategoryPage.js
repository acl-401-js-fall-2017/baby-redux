import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Expense from '../expenses/Expense';
import ExpenseForm from '../expenses/ExpenseForm';
import { addExpense } from '../expenses/actions';

class CategoryPage extends PureComponent {

  handleNewExpense = e => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.budget.value);
    this.props.addExpense(
      {
        name: e.target.name.value,
        value: e.target.budget.value
      },
      this.props.categoryId
    );
  }

  render() {
    const { name, budget: totalBudget, expenses } = this.props;
    return (
      <div className={`Category-page ${name}`}>
        <h2>{name}:<span> ${totalBudget}</span></h2>
        <ExpenseForm
          onComplete={this.handleNewExpense}
          buttonText="Add"
        />
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

export default connect(
  state => ({
    loading: state.loading,
    error: state.error
  }),
  { addExpense }
)(CategoryPage);