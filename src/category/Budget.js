import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCategory, updateCategory, loadCategory, testCondition, removeCategory } from './actions';
import BudgetForm from './BudgetForm';

function mapStateToProps(state) {
  return {
    budgets: state.budgets
  };
}

const mapDispatchToProps = {
  addCategory,
  updateCategory,
  removeCategory,
  loadCategory,
  testCondition
};

class Budget extends PureComponent {
  
  componentDidMount() {
    this.props.loadCategory();
  }
  handleAdd = budget => {
    this.props.addCategory(budget);
  }
  handleUpdate = budget => {
    this.props.updateCategory(budget);
  }
  handleRemove = id => {
    this.props.removeCategory(id);
  }
  
  render() {
    const { budgets, loadCategory, testCondition, error } = this.props;

    const showResponse = budgets
      ? <pre>{JSON.stringify(budgets, true, 2)}</pre>
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
        <BudgetForm onComplete={this.handleAdd} isAdd={true}/>
        <ul>
          {budgets.map(budget => (
            <li key={budget._id}>
              <h3>
                For:{budget.name} Amount: ${budget.amount}
                <button onClick={() => this.handleRemove(budget._id)}>⨂</button>
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