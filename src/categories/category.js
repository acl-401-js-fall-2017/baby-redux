import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCategories, addCategory, removeCategory, updateCategory } from './actions';
import AddForm from '../addForm';
import { NavLink } from 'react-router-dom';
import 'bulma/css/bulma.css';

class Category extends Component {
  state = {
    editing: null
  }

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
      <div className="container is-fluid">
        <h1 className="title">Add a new expense category</h1>
        <AddForm onComplete={this.handleAdd}/>
        {this.props.loading && 
            <div className="loader"  style={{ fontSize:'36px' }}>
              <i className="fa fa-spinner"></i>
            </div>
        }
        {this.props.error && 
            <div className="title">
              This is an ErRoR mEsSaGE!!!!
            </div>
        }
        <hr/>
        <div>
          {categories !== undefined  && categories.map(category => (
            <div className="category" key={category._id}>
              <div style={{ width: '200px', display: 'inline-block' }}>
                <NavLink to={`/categories/${category._id}`} className="link"><strong>{category.name}</strong></NavLink>
                <span>  </span> ${category.amount}
              </div>
              <button className="delete" onClick={() => removeCategory(category._id)}>X</button>
              <button onClick={()=> this.setState({ editing: category._id })}>update</button>
              {this.state.editing === category._id && <AddForm  category ={category} text="✎" onComplete={this.handleUpdate}/>}
              <hr/>
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