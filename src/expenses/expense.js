import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadExpenses, addExpense, removeExpense, updateExpense } from './actions';
import AddForm from '../addForm';

class Expense extends Component {
  state = {
    editing: null
  }

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
      <div className="container is-fluid">
        <h1 className="title">Add a new expense</h1>
        <AddForm onComplete={this.handleAdd} category={this.props.match.params.id}/>
        {this.props.loading && 
            <div className="loader">
              Loading Super Fast...
            </div>
        }
        {this.props.error && 
            <h4 className="subtitle is-5">
              This is an ErRoR mEsSaGE!!!!
            </h4>
        } 
        {expenses.length ===0 && <div className="title is-small">There are no Expenses recorded!!!</div>}
        <hr/>
        <div>
          {expenses !== undefined  && expenses.map(expense => (
            <div className="category" key={expense._id}>
              <div style={{ width: '200px', display: 'inline-block' }}>
                <strong>{expense.name}</strong>
                <span>  </span>
                <strong>${expense.amount}</strong>
              </div>
              <button className="delete" onClick={() => removeExpense(expense._id)}>X</button>
              <button onClick={()=> this.setState({ editing: expense._id })}>update</button>
              {this.state.editing === expense._id && <AddForm  expense ={expense} text="✎" onComplete={this.handleUpdate}/>}
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