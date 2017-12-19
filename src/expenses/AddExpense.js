import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addExpense } from './actions';
import styled from 'styled-components';

export class AddExpense extends PureComponent {

  handleAdd = expense => {
    this.props.addExpense(this.props.category._id, expense);
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
      <StyledDiv>
        <form onSubmit={this.handleSubmit}>
          <input name="name" placeholder={'Name'}/>
          <input name="amount" placeholder={'Amount'}/>
          <button type="submit">Add</button>
        </form> 
      </StyledDiv>
    );
  }
}

export default connect( 
  state => ({ categories: state }),
  { addExpense },
  (stateProps, dispatchProps, ownProps) => ({ 
    addExpense: dispatchProps.addExpense,
    category: ownProps.categoryToUpdate
  })
)(AddExpense);

const StyledDiv = styled.div`
text-align: center;
`;
