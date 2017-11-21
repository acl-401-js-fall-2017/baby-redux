import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBudget, updateBudget, removeBudget } from './actions';
import BudgetForm from './budgetForm';

class Budget extends Component {

  componentDidMount() {
    this.props.addBudget({ name: 'hiking trip', category: 'travel' });
    this.props.addBudget({ name: 'dinner', category: 'entertainment' });
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
             budget category: {budget.category} 
             budget name: {budget.name}
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