import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCategory, updateCategory, loadCategory, removeCategory } from './actions';
import BudgetForm from './budgetForm';

function mapStateToProps(state) {
  return {
    budgets: state.budgets
  };
}

const mapDispatchToProps = {
  onaddCategory: addCategory,
  updateCategory,
  removeCategory,
  loadCategory
};

class Budget extends PureComponent {
  
  componentDidMount() {
    this.props.loadCategory();
  }
  handleAdd = budget => {
    this.props.onaddCategory(budget);
  }
  handleUpdate = budget => {
    this.props.updateCategory(budget);
  }
  handleRemove = id => {
    this.props.removeCategory(id);
  }
  
  render() {
    const { budgets, error } = this.props;
    return (
      <div>
        { error && <div className="error">{error}</div> }
        <BudgetForm onComplete={this.handleAdd} isAdd={true}/>
        <ul>
          {budgets.map(budget => (
            <li key={budget._id}>
              <h3>
                For:{budget.name} Amount: ${budget.amount}
                <button onClick={() => this.handleRemove(budget._id)}>X</button>
              </h3>  
              <BudgetForm budget={budget} text="Update"
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
)(Budget);