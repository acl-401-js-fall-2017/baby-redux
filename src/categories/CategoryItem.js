import { removeCategory, updateCategory } from '../categories/actions';
import { removeExpense, updateExpense, addExpense, loadExpenses } from '../expenses/actions';
import React, { PureComponent } from 'react';
import CategoryForm from './CategoryForm';
import ExpenseForm from '../expenses/ExpenseForm';
import ExpenseItem from '../expenses/ExpenseItem';
import { connect } from 'react-redux';

class CategoryItem extends PureComponent {

  constructor(){
    super();
    this.state = {
      showExpenses: false
    };
  }

  handleUpdateCategory = category => event => {
    event.preventDefault();
    const update = {
      ...category,
      name: event.target.name.value,
      budget: event.target.budget.value
    }
    this.props.updateCategory(update);
    event.target.reset();
  }

  handleAddExpense = event => {
		event.preventDefault();
		const newExpense = {
      name: event.target.name.value,
      amount: event.target.expense.value,
      budget: event.target.dataset.value
    }
    this.props.addExpense(newExpense);
    event.target.reset();
  }
  
  handleRemove = id => this.props.removeCategory(id);

  loadExpenses = id => {
    this.setState({ showExpenses: !this.state.showExpenses })
    return this.props.loadExpenses(id);
  };

  render() {
    const { category, expenses } = this.props;
    const { showExpenses } = this.state;
    const expenseList = expenses[category._id] && expenses[category._id].map((expense, index) => {
      return (
        <li key={index}>
          <ExpenseItem expense={expense}/>
        </li>
      );
    });
    const Expenses = 
      <div>
        <ExpenseForm onComplete={event => this.handleAddExpense(event)} buttonValue={'Add Expense '} category={category}/>
        <br/>
        {expenseList}
      </div>;
  
    return (
      <div>
        <h2>{category.name}: ${category.budget}</h2>
        <CategoryForm onComplete={this.handleUpdateCategory(category)} buttonValue={'Edit ‎✎'}/>
        <input type="button" value="Delete Category" onClick={() => this.handleRemove(category._id)}/>
        <input type="button" value={ showExpenses ? "Hide Expenses" : "Show Expenses"} onClick={() => this.loadExpenses(category._id) }/>
        <br/>
        {showExpenses && Expenses}
      </div>
    );
  }
}


const connectedCategoryItem = connect(
  state => ({
    expenses: state.expenses,
    loading: state.loading,
    error: state.error
  }), 
  { removeCategory, updateCategory, loadExpenses, addExpense }
)(CategoryItem);

export default connectedCategoryItem;