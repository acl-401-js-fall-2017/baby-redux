import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseFrom';



class ExpenseItem  extends PureComponent {
    handleUpdate = category => event => {
        event.preventDefault();
        const update = {
          ...category,
          name: event.target.name.value,
          budget: event.target.expense.value
        }
        this.props.updateCategory(update);
      }

    handleRemove = id => this.props.removeCategory(id);
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

