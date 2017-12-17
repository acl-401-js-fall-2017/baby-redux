import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { StyledButton } from '../styles/styled';
import { addExpense, updateExpense, removeExpense, loadExpenses } from './actions';
import ExpenseForm from './ExpenseForm';

import styled from 'styled-components';

class Expenses extends PureComponent {

  componentDidMount() {
    this.props.loadExpenses(this.props.category._id);
  }

  render() {
    const { expenses, category, addExpense, removeExpense, updateExpense } = this.props;

    return (
      <div>
        <h4>{category.name}'s' Expense: </h4>
        <h5>Add an Expense</h5>
        <ExpenseForm categoryId={category._id} addExpense={addExpense}/>
        <div>
          <h4> Update {category.name}'s Expenses </h4>
          <div>
            {expenses.map(expense => (
              <div key={expense._id}>
                <div>
                Expense: {expense.name}
                  {/* <br/> */}
                Cost: ${expense.cost}
                  <StyledButton className="removebtn" onClick={() => removeExpense(category._id, expense._id)}>Remove</StyledButton>
                </div>
                <ExpenseForm categoryId={category._id} expense={expense} text="Update"
                  updateExpense={updateExpense}/>
              </div>    
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  ({ expenses }) => ({ expenses }),
  { addExpense, removeExpense, updateExpense, loadExpenses }
)(Expenses);
