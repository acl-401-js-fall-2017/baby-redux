import React, { PureComponent } from 'react';
import CategoryForm from './CategoryForm';
import styled from 'styled-components';
import { Button, ModifyButton, ExpenseButton } from '../styles/style';


export default class Category extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    };
  }

  render() {
    const { category, onRemove, onUpdate } = this.props;   
    return (
      <li>
        <h4>
              The budget for {category.name} is ${category.budget}
          <Button onClick={() => this.setState({ showForm: (this.state.showForm ? false  : true) })}>
            {this.state.showForm === false ? 'Modify' : 'Hide Form'}
          </Button>
          { this.state.showForm  && 
          <CategoryForm className="update" category={category} text="✎" onComplete={onUpdate}/>
          }
          <Button className="remove" onClick={() => onRemove(category._id)}>🗑</Button>
          <Button  className="expense" expense={category._id} onComplete={onUpdate}>Expense</Button>
        </h4>
      </li>
    );
  }
}
