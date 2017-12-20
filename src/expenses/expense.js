import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadExpenses, addExpense, removeExpense, updateExpense } from './actions';
import AddForm from '../addForm';

class Expense extends Component {
  state = {
    editing: null
  }

  componentDidMount() {
    this.props.loadExpenses(this.props.id);
  }
  
  handleAdd = (expense) => {
    this.props.addExpense(expense);
  }

  handleUpdate= (expense) => {
    const { name, amount, _id } = expense;
    console.log(expense);
    this.props.updateExpense({ name, amount, _id });
  }

  render () {
    const { expenses, removeExpense } = this.props;
    return (
      <section className="section">
        <h1 className="title">Add a new expense</h1>
        <AddForm onComplete={this.handleAdd} category={this.props.id}/>
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
              <div style={{ width: '300px', display: 'inline-block' }}>
                <div style={{ width: '240px', display: 'inline-block' }}><strong>{expense.name}</strong></div>
                <div style={{ width: '50px', display: 'inline-block' }}><strong>${expense.amount}</strong></div>
              </div>
              <button className="button" onClick={() => removeExpense(expense._id)}>X</button>
              <button className="button" onClick={()=> this.setState({ editing: expense._id })}>✎</button>
              {this.state.editing === expense._id && <AddForm  expense ={expense} text="✎" onComplete={this.handleUpdate}/>}
              <hr/>
            </div>
          ))}
        </div>
      </section>
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