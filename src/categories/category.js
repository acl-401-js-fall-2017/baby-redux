import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCategories, addCategory, removeCategory, updateCategory } from './actions';
import AddForm from '../addForm';
import { NavLink } from 'react-router-dom';
import '../App.css';

class Category extends Component {

  componentDidMount() {
    this.props.loadCategories();
  }
  
  handleAdd = (category) => {
    this.props.addCategory(category);
  }

  handleUpdate= (category) => {
    this.props.updateCategory(category);
  }

  render () {
    const { categories, removeCategory } = this.props;
    return (
      <div>
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
        <ul>
          {categories !== undefined  && categories.map(category => (
            <li key={category._id}>
              <h4>category name: {category.name}</h4>
              <h4>amount: ${category.amount}</h4>
              {/* <AddForm  category ={category} text="update" onComplete={this.handleUpdate}/> */}
              <button onClick={() => removeCategory(category._id)}>X</button>
              <NavLink to={`/categories/${category._id}`}>{category.name}</NavLink>
            </li>
          ))}
        </ul>
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