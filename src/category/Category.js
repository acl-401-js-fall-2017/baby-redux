import React, { PureComponent } from 'react';
import CategoryForm from './CategoryForm';
import styled from 'styled-components';


export default class Category extends PureComponent {
  
  render() {
    const { category, onRemove, onUpdate } = this.props;   
    return (
      <li>
        <h4>
              The budget for {category.name} is ${category.budget}
          <RemoveButton onClick={() => onRemove(category._id)}>Remove</RemoveButton>
        </h4>
        <CategoryForm className="update" category={category} text="Update" onComplete={onUpdate}/>
      </li>
    );
  }
}

const RemoveButton = styled.button`
  background: white;
  color: red;
  border: 1px solid black;
  margin: 0 1em;
  height: ${props => props.dimension || 20}px;
  width: ${props => props.dimension || 60}px;

  &:hover {
    background-color: #ffb3b3;
  }
`;
