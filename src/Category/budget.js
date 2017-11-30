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

  // handleRemove = (id) => {
  //   this.props.removeBudget(id);
  // }

  render () {
    const { budgets, removeBudget } = this.props;
    return (
      <div>
        <BudgetForm onComplete={this.handleAdd}/>
        <ul>
          {budgets !== undefined  && budgets.map(budget => (
            <li key={budget._id}>
              <li>budget category: {budget.category}</li>
              <li>budget name: {budget.name}</li>
              <button onClick={() => removeBudget(budget._id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => (
    console.log(state),
    { 
      budgets: state.budgetsActions,
      error: state.budgetsError
    }),
  { loadBudgets, addBudget, removeBudget }
)(Budget);