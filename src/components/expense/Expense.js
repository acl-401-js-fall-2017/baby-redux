import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addExpense, updateExpense, loadExpense, removeExpense } from './expense.actions';
import ExpenseForm from './ExpenseForm';

const mapStateToProps = ({ expenses }) => ({
  expenses
});

const mapDispatchToProps = {
  addExpense,
  updateExpense,
  removeExpense,
  loadExpense
};

class Expense extends PureComponent {
  
  componentDidMount() {
    this.props.loadExpense();
  }
  handleAdd = expense => {
    this.props.addExpense(expense);
  }
  handleUpdate = expense => {
    this.props.updateExpense(expense);
  }
  handleRemove = id => {
    this.props.removeExpense(id);
  }
  
  render() {
    const { expenses, error } = this.props;

    // const showResponse = expenses
    //   ? <pre>{JSON.stringify(expenses, true, 2)}</pre>
    //   : <div>No response</div>;

    return (
      <div>
        { error && <div className="error">{error}</div> }
        <ExpenseForm onComplete={this.handleAdd} isAdd={true}/>
        <ul>
          {expenses.map(expense => (
            <li key={expense._id}>
              <h3>
                For:{expense.name} Amount: ${expense.amount}
                <button onClick={() => this.handleRemove(expense._id)}>⨂</button>
              </h3>  
              <ExpenseForm expense={expense} text="Update"
                onComplete={this.handleUpdate} isAdd={false}/>
            </li>))}
        </ul>  
      </div>  
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expense);