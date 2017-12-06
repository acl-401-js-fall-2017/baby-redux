import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { StyledButton } from '../styles/styled';
import { addExpense, updateExpense, removeExpense, loadExpenses } from './actions';
import ExpenseForm from './ExpenseForm';

class Expenses extends PureComponent {

  componentDidMount() {
    this.props.loadExpenses(this.props.categoryId);
  }

  render() {
    const { expenses, addExpense, removeExpense, updateExpense } = this.props;

    return (
      <div>
        <h4>Add Expense: </h4>
        <ExpenseForm categoryId={this.props.categoryId} onComplete={addExpense}/>
        <div>
          {expenses.map(expense => (
            <div key={expense._id}>
              <h5> Update {expense.category.name}'s Expenses </h5>
              <h5>
                Expense: {expense.name}
                Cost: ${expense.cost}
                <StyledButton className="removebtn" onClick={() => removeExpense(this.props.categoryId, expense._id)}>Remove</StyledButton>
              </h5>
              <ExpenseForm categoryId={this.props.categoryId} expense={expense} text="Update"
                onComplete={updateExpense}/>
            </div>    
          ))}
        </div>
      </div>
    );
  }
}

export default connect(
  ({ expenses }) => ({ expenses }),
  { addExpense, removeExpense, updateExpense, loadExpenses }
)(Expenses);