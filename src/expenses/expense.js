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
    console.log(expense);
    this.props.addExpense(expense);
  }

  handleUpdate= (expense) => {
    const { name, amount, _id } = expense;
    this.props.updateExpense({ name, amount, _id });
  }

  render () {
    const { expenses, removeExpense } = this.props;
    return (
      <div className="main">
        <h3>Add a new expense</h3>
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
        <div>
          {expenses !== undefined  && expenses.map(expense => (
            <div className="category" key={expense._id}>
              <button onClick={() => removeExpense(expense._id)}>X</button>
              expense name: {expense.name}
              <span> </span>
              amount: ${expense.amount}
              <AddForm  expense ={expense} text="update" onComplete={this.handleUpdate}/>
            </div>
          ))}
        </div>
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