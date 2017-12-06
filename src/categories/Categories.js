import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCategory, updateCategory, removeCategory, loadCategories } from './actions';
import CategoryForm from './CategoryForm';

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
    const { categories } = this.props;
    return (
      <div>
        <table id="table">
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
        </table>
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
    return(
      <tr>
        <td>{ name }</td>
        <td>{ budget }</td>
        <td><button className="button" onClick={() => onRemove(id)}>Remove</button></td>
        <td><button className="button" onClick={() => onShowUpdate(index)}>Update</button></td>
      </tr>
    );
  }
}

function mapStateToProps(state) {
  console.log('in connect', state);
  return {
    categories: state
  };
}

export default connect(
  mapStateToProps,
  { addCategory, updateCategory, removeCategory, loadCategories }
)(Categories);