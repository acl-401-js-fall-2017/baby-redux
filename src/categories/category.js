import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCategories, addCategory, removeCategory, updateCategory } from './actions';
import AddForm from '../addForm';
import { Link } from 'react-router-dom';
import '../App.css';

class Category extends Component {

  componentDidMount() {
    this.props.loadCategories();
  }
  
  handleAdd = (category) => {
    this.props.addCategory(category);
  }

  handleUpdate= (category) => {
    const { _id } = category.category;
    const { name, amount } = category;
    this.props.updateCategory({ name, amount, _id });
  }

  render () {
    const { categories, removeCategory } = this.props;
    return (
      <div className="main">
        <h3>Add a new expense category</h3>
        <AddForm onComplete={this.handleAdd}/>
        {this.props.loading && 
            <div className="loader">
              Loading Super Fast...
            </div>
        }
        {this.props.error && 
            <div className="error">
              This is an ErRoR mEsSaGE!!!!
            </div>
        }
        <div>
          {categories !== undefined  && categories.map(category => (
            <div className="category" key={category._id}>
              <button onClick={() => removeCategory(category._id)}>X</button>
              <Link to={`/categories/${category._id}`}>category: {category.name}</Link>
              <span> </span>amount: ${category.amount}
              <AddForm  category ={category} text="update" onComplete={this.handleUpdate}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ 
    categories: state.categoriesActions,
    error: state.categoriesError,
    loading: state.categoriesLoading
  }),
  { loadCategories, addCategory, removeCategory, updateCategory }
)(Category);