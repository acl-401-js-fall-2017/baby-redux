import React, { Component } from 'react';
import { connect } from 'react-redux';
import Expense from '../expenses/Expense';
import ExpenseForm from '../expenses/ExpenseForm';
import { addExpense, removeExpense, updateExpense } from '../expenses/actions';
import './CategoryPage.css';

const addUpdate = (obj, propName, newProp) => {
  if(newProp) obj[propName] = newProp;
};

class CategoryPage extends Component {

  constructor() {
    super();
    this.state = {
      totalExpenses: null,
      budgetMargin: null,
      budgetMarginColorIndicator: 'black'
    };
  }

  getTotalExpenses = () => this.props.expenses.reduce((sum, expense) => sum + parseFloat(expense.value), 0);
  getBudgetMargin = () => this.props.budget - this.state.totalExpenses;

  calcMarginColorIndicator = () => {
    const percentMargin = this.state.budgetMargin / this.props.budget * 100;
    if(percentMargin < 0) return 'red';
    if(percentMargin < 5) return 'orange';
    if(percentMargin < 20) return '#ccaa00';
    return 'green';
  }

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
    const expenseUpdates = {};
    addUpdate(expenseUpdates, 'name', e.target.name.value);
    addUpdate(expenseUpdates, 'value', e.target.budget.value);

    this.props.updateExpense(
      this.props.categoryId,
      expenseId,
      expenseUpdates
    );
  }

  handleDeleteExpense = expenseId => () => {
    this.props.removeExpense(
      expenseId,
      this.props.categoryId
    );
  }

  async componentDidMount() {
    await this.setState({
      ...this.state,
      totalExpenses: this.getTotalExpenses()
    });
    await this.setState({
      ...this.state,
      budgetMargin: this.getBudgetMargin()
    });
    this.setState({
      ...this.state,
      budgetMarginColorIndicator: this.calcMarginColorIndicator()
    });
    console.log(this.calcMarginColorIndicator());
  }

  render() {
    const { name, budget: totalBudget, expenses } = this.props;
    const { totalExpenses, budgetMargin, budgetMarginColorIndicator } = this.state;
    return (
      <div className={`Category-page ${name}`}>
        <h2>
          <span
            style={{ color: budgetMarginColorIndicator }}
          >Expenses in Category: {name}</span><br/>
          <small>total budget: ${totalBudget}</small><br/>
          <small>total expenses: ${totalExpenses}</small><br/>
          <small
            style={{ color: budgetMarginColorIndicator }}
          >budget margin: ${budgetMargin}</small><br/>
        </h2>
        <ExpenseForm
          onComplete={this.handleNewExpense}
          buttonText="Add"
          editing="new expense"
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
  { addExpense, removeExpense, updateExpense }
)(CategoryPage);