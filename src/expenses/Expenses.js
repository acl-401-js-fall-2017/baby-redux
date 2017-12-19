import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addExpense, removeExpense } from './actions';
import { loadCategories } from '../category/actions';
import AddExpense from './AddExpense';
import styled from 'styled-components';

class Expenses extends PureComponent {

  state = { display: '' }

  componentDidMount() {
    this.props.loadCategories();
  } 

  render() {
    const id = this.props.id;
    const category = this.props.categories? this.props.categories.filter(p => p._id === id)[0]: {};
    
    if (!this.props.categories || !category) return <div></div>;

    return (
      <StyledDiv>
        <h4> Expenses for {category.name} </h4>
        <h5> Budget is {category.budget} </h5>
        <AddExpense categoryToUpdate ={category}/>
        <ul>
          {
            category.expenses && 
                category.expenses.map(expense =>(
                  <li style={{ display:'flex', justifyContent: 'center' }} type="none" key={category._id}>
                    <h4>Spend {expense.amount}$ on {expense.name} </h4>
                    <button style={{ height:'50%' }} onClick={()=> this.props.removeExpense(category._id, expense._id)}>X</button>
                  </li>
                ))
          }
        </ul>
      </StyledDiv>
    );
  }
}

export default connect( 
  state => ({ categories: state.categories, error: state.categoryError }),
  { addExpense, loadCategories, removeExpense }
)(Expenses);

const StyledDiv = styled.div`
text-align: center;
`;

