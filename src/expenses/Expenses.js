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

  handleAdd = async expense => {
    const id = this.getCategoryId();
    const { name, amount } = expense;
    await this.props.addExpense({ name, amount, category : id });
    const expenses = await expenseApi.get(this.getCategoryId());
    this.setState({ expenses });
  }

  render() {
    const { expenses } = this.state;

    return(
      <div>

        { expenses.map(expense =>

          <div key={expense._id} className='block'>

            <div className='columns'>
              <div className='column'>
                {expense.name}
              </div>

              <div className='column'>
                {expense.amount}
              </div>

              <div className='column'>
              </div>
            </div>

          </div>

        )}
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