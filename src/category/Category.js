import React, { PureComponent } from 'react';
import CategoryForm from './CategoryForm';
import styled from 'styled-components';
import { RemoveButton, ModifyButton } from '../styles/style';


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
          <ModifyButton className="Modify" onClick={() => this.setState({ showForm: (this.state.showForm ? false  : true) })}>
            {this.state.showForm === false ? 'Modify' : 'Hide Form'}
          </ModifyButton>
          { this.state.showForm  && 
          <CategoryForm className="update" category={category} text="✎" onComplete={onUpdate}/>
          }
          <RemoveButton className="remove" onClick={() => onRemove(category._id)}>🗑</RemoveButton>
        </h4>
      </li>
    );
  }
}
