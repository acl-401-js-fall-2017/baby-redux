import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCategory, updateCategory, loadCategory, testCondition, removeCategory } from './actions';
import ExpenseForm from './ExpenseForm';

function mapStateToProps(state) {
  return {
    expenses: state.expenses
  };
}

const mapDispatchToProps = {
  addCategory,
  updateCategory,
  removeCategory,
  loadCategory,
  testCondition
};

class Expense extends PureComponent {
  
  componentDidMount() {
    this.props.loadCategory();
  }
  handleAdd = expense => {
    this.props.addCategory(expense);
  }
  handleUpdate = expense => {
    this.props.updateCategory(expense);
  }
  handleRemove = id => {
    this.props.removeCategory(id);
  }
  
  render() {
    const { expenses, loadCategory, testCondition, error } = this.props;

    const showResponse = expenses
      ? <pre>{JSON.stringify(expenses, true, 2)}</pre>
      : <div>No response</div>;

    return (
      <div>
        <button onClick= {() => testCondition({ wait: 1500 })}>
        Load with wait
        </button>
        <button onClick={() => testCondition({ unexpected: true })}>
          Load with Unexpected Error
        </button>
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