import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadBudgets, addBudget, removeBudget, updateBudget } from './actions';
import BudgetForm from './budgetForm';

class Budget extends Component {

  componentDidMount() {
    this.props.loadBudgets();
  }
  
  handleAdd = (budget) => {
    this.props.addBudget(budget);
  }

  handleUpdate= (budget) => {
    this.props.updateBudget(budget);
  }

  render () {
    const { budgets, removeBudget } = this.props;
    return (
      <div>
        <BudgetForm onComplete={this.handleAdd}/>
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
          {budgets !== undefined  && budgets.map(budget => (
            <li key={budget._id}>
              <h4>budget name: {budget.name}</h4>
              <h4>amount: ${budget.amount}</h4>
              <BudgetForm  budget ={budget} text="update" onComplete={this.handleUpdate}/>
              <button onClick={() => removeBudget(budget._id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ 
    budgets: state.budgetsActions,
    error: state.budgetsError,
    loading: state.budgetsLoading
  }),
  { loadBudgets, addBudget, removeBudget, updateBudget }
)(Budget);