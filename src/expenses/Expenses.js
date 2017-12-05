import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpense, updateExpense, removeExpense, loadExpenses } from './actions';
import ExpenseForm from './ExpenseForm';
import expenseApi from '../services/expenses-api';

class Expenses extends Component {
  constructor() {
    super();
    this.state = {
      expenses: []
    };
  }

  async componentDidMount() {
    const expenses = await expenseApi.get(this.getCategoryId());
    console.log(expenses);
    this.setState({ expenses });
  }

  getCategoryId() {
    return this.props.id;
  }

  handleAdd = expense => {
    const { name, amount } = expense;
    this.props.addExpense({ name, amount });
  }

  render() {
    const { expenses } = this.state;

    return(
      <div>
        <h1>Hello</h1>
        <ul>{ expenses.map(expense => <li>{expense.name}</li>)}</ul>
        <ExpenseForm id={this.props.id} onComplete={expense => this.handleAdd(expense)}/>
      </div>
    );

  }
}


function mapStateToProps(state) {
  return {
    expenses: state.expenses,
  };
}

export default connect(
  mapStateToProps,
  { loadExpenses, addExpense, updateExpense, removeExpense }
)(Expenses);