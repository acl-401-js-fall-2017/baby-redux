import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadExpenses, addExpense, removeExpense, updateExpense } from './actions';
import AddForm from '../addForm';
import '../App.css';

class Expense extends Component {

  componentDidMount() {
    this.props.loadExpenses(this.props.match.params.id);
  }
  
  handleAdd = (expense) => {
    this.props.addExpense(expense);
  }

  handleUpdate= (expense) => {
    const { name, amount, _id } = expense;
    this.props.updateExpense({ name, amount, _id });
  }

  render () {
    const { expenses, removeExpense } = this.props;
    return (
      <div>
        <AddForm onComplete={this.handleAdd} category={this.props.match.params.id}/>
        {this.props.loading && 
            <div className="loader">
              Loading Super Fast...
            </div>
        }
        {this.props.error && 
            <div className="error">
              This is an ErRoR mEsSaGE!!!!
            </div>
        }
        <ul>
          {expenses !== undefined  && expenses.map(expense => (
            <li key={expense._id}>
              <h4>expense name: {expense.name}</h4>
              <h4>amount: ${expense.amount}</h4>
              <AddForm  expense ={expense} text="update" onComplete={this.handleUpdate}/>
              <button onClick={() => removeExpense(expense._id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ 
    expenses: state.expensesActions,
    error: state.expensesError,
    loading: state.expensesLoading
  }),
  { loadExpenses, addExpense, removeExpense, updateExpense }
)(Expense);