import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCategory, updateCategory, removeCategory, loadCategories } from './actions';
import CategoryForm from './CategoryForm';
import styled from 'styled-components';
import { Button } from './component-library';
import { backgroundColor, border } from './constants';


class Categories extends Component {

  state = {
    editing: false, 
    editingIndex: ''
  }
  
  componentDidMount() {
    this.props.loadCategories();
  }

  handleAdd = category => {
    console.log('inhandleAdd', category);
    this.props.addCategory(category);
  }

  handleShowUpdate = (index) => {
    console.log('inHandleShowUpdate', this.props.categories[index]);
    this.setState({ editing: true });
    this.setState({ editingIndex: index });
  }

  handleSubmitUpdate = (category) => {
    this.setState({ editing: false });
    console.log('inhandleSubmit', category);
    this.props.updateCategory(category);
  }

  handleRemove = _id => {
    this.props.removeCategory(_id);
  }

  render() {
    const { categories, error } = this.props;
    console.log('categories', categories);
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Budget</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <ListItem index={index} key={category._id} id={category._id} name={category.name} budget={category.budget} onShowUpdate={this.handleShowUpdate} onRemove={this.handleRemove}/>
            ))}
          </tbody>
        </Table>
        { !this.state.editing ? <CategoryForm text="Add" onComplete={this.handleAdd}
        /> : []
        }      
        { this.state.editing ? <CategoryForm text="Update" editing={this.state.editing} id={categories[this.state.editingIndex]._id} name={categories[this.state.editingIndex].name} budget={categories[this.state.editingIndex].budget}
          onComplete={this.handleSubmitUpdate}
        /> : []
        }          
      </div>
    );
  }
}

class ListItem extends Component {
  
  render() {
    const { id, name, budget, onShowUpdate, onRemove, editing, index } = this.props;
    const removeButton = Button('Remove', 'submit', () => {
      console.log('in Button id', id);
      onRemove(id);
    });
    const updateButton = Button('Update', 'submit', () => {
      onShowUpdate(index);
    });    
    return(
      <tr>
        <td>{ name }</td>
        <td>{ budget }</td>
        <td>{removeButton}</td>
        <td>{updateButton}</td>
      </tr>
    );
  }
}

const Table = styled.table`
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top: 40px;
  > thead > tr {
      border: ${border};
      background-color: ${backgroundColor};
      padding: 12px 8px; 
      text-align: center;
      color: white;
  }
  > tbody > tr {
      &:nth-child(even){background-color: #f2f2f2;}
      &:hover {background-color: #ddd;}
      padding: 8px;
      > td {
        border: ${border};
      }
  }
  `;

function mapStateToProps(state) {
  console.log('in connect', state);
  return {
    categories: state.categories
  };
}

export default connect(
  mapStateToProps,
  { addCategory, updateCategory, removeCategory, loadCategories }
)(Categories);