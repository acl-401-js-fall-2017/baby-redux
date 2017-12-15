import React, { Component } from 'react';
import CategoryForm from './CategoryForm';
import { Link } from 'react-router-dom';
import { Button } from '../styles/style';


export default class Category extends Component {

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
          <CategoryForm className="update" category={category} text="Update" onComplete={onUpdate}/>
          }
          <Button className="remove" onClick={() => onRemove(category._id)}>🗑</Button>
          <Link to="/expenses">Expense</Link>         
        </h4>
      </li>
    );
  }
}

