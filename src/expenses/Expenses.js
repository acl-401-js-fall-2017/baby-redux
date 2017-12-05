import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpense, updateExpense, removeExpense, loadExpenses } from './actions';
import ExpenseForm from './ExpenseForm';

class Expenses extends Component {
  
  handleAdd = expense => {
    const { name, amount } = expense;
    this.props.addExpense({ name, amount });
  }

  render() {


    return(
      <div>
        <h1>Hello</h1>
        <ExpenseForm id={this.props.id} onComplete={expense => this.handleAdd(expense)}/>
      </div>
    );

  }
}


function mapStateToProps(state) {
  return {
    expense: state.category,
  };
}

export default connect(
  mapStateToProps,
  { loadExpenses, addExpense, updateExpense, removeExpense }
)(Expenses);