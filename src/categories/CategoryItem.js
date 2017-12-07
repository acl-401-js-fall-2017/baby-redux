import { removeCategory, updateCategory, loadExpenses } from '../categories/actions';
import { removeExpense, updateExpense, addExpense } from '../expenses/actions';

import React, { PureComponent } from 'react';
import CategoryForm from './CategoryForm';
import ExpenseForm from '../expenses/ExpenseForm';
import ExpenseItem from '../expenses/ExpenseItem';
import { connect } from 'react-redux';

class CategoryItem extends PureComponent {
  
  handleUpdate = category => event => {
    event.preventDefault();
    const update = {
      ...category,
      name: event.target.name.value,
      budget: event.target.budget.value
    }
    this.props.updateCategory(update);
  }

  // handleUpdateExpense = expense => event => {
  //   event.preventDefault();
  //   const update = {
  //     ...expense,
  //     name: event.target.name.value,
  //     amount: event.target.budget.value
  //   }
  //   this.props.updateCategory(update);
  // }

  handleAddExpense = event => {
		event.preventDefault();
		event = event.target;
		const newExpense = {
      name: event.name.value,
      amount: event.expense.value,
      budget: event.target.dataset.value
    }
    this.props.addExpense(newExpense);
    event.reset();
  }
  
  handleRemove = id => this.props.removeCategory(id);
  loadExpenses = id => this.props.loadExpenses(id);

  render() {
    const { category } = this.props;
    const expenseList = this.props.expenses[category._id] ? this.props.expenses[category._id].map(expense => {
      return (
        <li>
          <ExpenseItem expense={expense} category={category}/>
        </li>
      );
    }) : null;
    return (
      <div>
        <h1>{category.name}</h1>
        <p>Budget - {category.budget}</p>
        <CategoryForm onComplete={this.handleUpdate(category)} buttonValue={'edit'}/>
        <ExpenseForm onComplete={event => this.handleAddExpense(event)} buttonValue={'new expense'}/>
        <input type="button" value="remove" onClick={() => this.handleRemove(category._id)}/>
        <input type="button" value="show expenses" onClick={() => this.loadExpenses(category._id) }/>
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