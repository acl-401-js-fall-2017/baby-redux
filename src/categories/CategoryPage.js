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
    if(percentMargin < 20) return '#67FF4D';
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
        <h2>Expenses in Category: {name}</h2>
        <aside className="category-page-sidebar">
          <p>
            <span className="sidebar-keys">total budget:</span> 
            <span className="sidebar-values">${totalBudget}</span>
          </p>
          <p>
            <span className="sidebar-keys">total expenses:</span> 
            <span className="sidebar-values">${totalExpenses}</span>
          </p>
          <p>
            <span className="sidebar-keys">budget margin:</span>
            <span
              style={{ color: budgetMarginColorIndicator }}
              className="sidebar-values"
            >${budgetMargin}</span>
          </p>
          <ExpenseForm
            onComplete={this.handleNewExpense}
            buttonText="Add"
            editing="new expense"
          />
        </aside>
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