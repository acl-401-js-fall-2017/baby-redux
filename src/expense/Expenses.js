import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addExpense, updateExpense, removeExpense } from './actions';
import ExpenseForm from './ExpenseForm';

class Expenses extends PureComponent {

//   componentDidMount() {
//     this.props.loadExpenses();
//   }

  render() {
    const { expenses, addExpense, removeExpense, updateExpense } = this.props;

    return (
      <div>
        <ExpenseForm onComplete={addExpense}/>
        <ul>
          {expenses.map(expense => (
            <li key={expense._id}>
              <h5>
                Expense: {expense.name}
                Cost: ${expense.cost}
                <button onClick={() => removeExpense(expense._id)}>Remove</button>
              </h5>
              <ExpenseForm expense={expense} text="Update"
                onComplete={updateExpense}/>
            </li>    
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  ({ expenses }) => ({ expenses }),
  { addExpense, removeExpense, updateExpense }
)(Expenses);