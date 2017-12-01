import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBudget, updateBudget, removeBudget } from './actions';
import BudgetForm from './budgetForm';

class Budget extends Component {

  componentDidMount() {
    this.props.addBudget({ name: 'hiking trip', amount: 20 });
    this.props.addBudget({ name: 'dinner', amount: 24 });
  }
  
  handleAdd = (budget) => {
    this.props.addBudget(budget);
  }

  render () {
    const { budgets } = this.props;
    
    return (
      <div>
        <BudgetForm onComplete={this.handleAdd}/>
        <ul>
          {budgets.map(budget => (
            <li key={budget._id}>
              <h4>budget name: {budget.name}</h4>
              <h4>budget amount: ${budget.amount}</h4> 
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    budgets: state
  };
}

export default connect(
  mapStateToProps,
  { addBudget, updateBudget, removeBudget }
)(Budget);