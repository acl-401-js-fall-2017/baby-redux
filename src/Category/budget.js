import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadBudgets, addBudget, removeBudget } from './actions';
import BudgetForm from './budgetForm';

class Budget extends Component {

  componentDidMount() {
    this.props.loadBudgets();
    
  }
  
  handleAdd = (budget) => {
    this.props.addBudget(budget);
  }

  render () {
    const { budgets, removeBudget } = this.props;
    return (
      <div>
        <BudgetForm onComplete={this.handleAdd}/>
        <ul>
          {budgets !== undefined  && budgets.map(budget => (
            <li key={budget._id}>
              <h4>budget name: {budget.name}</h4>
              <h4>amount: ${budget.amount}</h4>
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
    error: state.budgetsError
  }),
  { loadBudgets, addBudget, removeBudget }
)(Budget);