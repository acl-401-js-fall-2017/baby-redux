import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { removeExpense, updateExpense } from '../expenses/actions';


class ExpenseItem  extends PureComponent {

    handleUpdateExpense = expense => event => {
        event.preventDefault();
        const update = {
          ...expense,
          name: event.target.name.value,
          amount: event.target.expense.value,
          budget: this.props.expense.budget
        }
        this.props.updateExpense(update);
        event.target.reset();
      }

    handleRemoveExpense = id => this.props.removeExpense(id, this.props.expense.budget);

    render(){
        const { expense } = this.props;
        return (
            <div>
              <h3>{expense.name}</h3>
              <p>cost: ${expense.amount}</p>
              <ExpenseForm onComplete={this.handleUpdateExpense(expense)} buttonValue={'Edit Expense ‎✎'}/>
              <input type="button" value="remove" onClick={() => this.handleRemoveExpense(expense._id)}/>
            </div>
        )
    }
}

const connectedExpenseItem = connect(
    null, 
    { removeExpense, updateExpense }
  )(ExpenseItem);
  
  export default connectedExpenseItem;
