import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadExpense, addExpense, updateExpense, removeExpense } from './actions';
import ExpenseForm from './ExpenseForm';
// import Category from './Category';
import { List } from '../styles/style';

class Expenses extends PureComponent {
  
  // componentDidMount() {
  //   this.props.loadExpense();
    
  // }
  
  handleAdd = expense => {
    this.props.addExpense(expense);
  }
  
  handleUpdate = (id, data) => {
    this.props.updateExpense(id, data);
  }
  
  handleRemove = id => {
    this.props.removeExpense(id);
  }
  render() {
    const { expenses, category } = this.props;   
    return (
      <div>
        <ExpenseForm onComplete={this.handleAdd}/>
        <List>
          <h2>Expenses for {category.name}</h2>
          {expenses.map(expense => (
            <ExpenseForm key={expense._id} 
              expense={expense} 
              onRemove={this.handleRemove} 
              onUpdate={this.handleUpdate}/>
          )) }
        </List>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state : state,
  expenses: state.expenses,
});

export default connect(
  mapStateToProps, 
  { loadExpense, addExpense, updateExpense, removeExpense }     // = mapDispatchToProps, calling bindActionCreator under the hood
)(Expenses);
