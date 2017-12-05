import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addExpense, loadCategories } from './actions';
import styled from 'styled-components';

export class AddExpense extends PureComponent {

  handleAdd = expense => {
    this.props.addExpense(this.props.category, expense);
  }

  handleSubmit =  event => {
    event.preventDefault();
    const { elements } = event.target;
    const newExpense =
      {
        name: elements.name.value,
        amount: elements.amount.value
      };
    this.handleAdd(newExpense);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="name" placeholder={'Name'}/>
          <input name="amount" placeholder={'Amount'}/>
          <button type="submit">Update</button>
        </form> 
      </div>
    );
  }
}

export default connect( 
  state => ({ categories: state }),
  { addExpense, loadCategories },
  (stateProps, dispatchProps, ownProps) => ({ 
    addExpense: dispatchProps.addExpense,
    category: ownProps.categoryToUpdate
  })
)(AddExpense);

const UpdateDiv = styled.div`
display: ${props => props.editing? 'flex' : 'none'}
`;