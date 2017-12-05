import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { removeExpense, updateExpense } from '../expenses/actions';



class ExpenseItem  extends PureComponent {
    handleUpdate = expense => event => {
        event.preventDefault();
        const update = {
          ...expense,
          name: event.target.name.value,
          amount: event.target.expense.value,
          budget: this.props.expense.budget
        }
        this.props.updateExpense(update);
      }

    handleRemove = id => this.props.removeExpense(id, this.props.expense.budget);

    render(){
        const { expense } = this.props;
        return (
            <div>
              <h3>{expense.name}</h3>
              <p>Expense - {expense.amount}</p>
              <ExpenseForm onComplete={this.handleUpdate(expense)} buttonText={'edit'}/>
              <input type="button" value="remove" onClick={() => this.handleRemove(expense._id)}/>
            </div>
        )
    }
}

const connectedExpenseItem = connect(
    null, 
    { removeExpense, updateExpense }
  )(ExpenseItem);
  
  export default connectedExpenseItem;
