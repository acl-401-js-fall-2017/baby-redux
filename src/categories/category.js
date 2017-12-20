import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCategories, addCategory, removeCategory, updateCategory } from './actions';
import AddForm from '../addForm';
import { NavLink } from 'react-router-dom';


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
    const { categories, removeCategory, user } = this.props;
    const userCategory = categories.filter((item) => item.owner === user._id);
    console.log(userCategory);
    return (
      <div className="container is-fluid">
        <h3>Add a new expense category</h3>
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
          {userCategory !== undefined  && userCategory.map(category => (
            <div className="category" key={category._id}>
              <div style={{ width: '300px', display: 'inline-block' }}>
                <div style={{ width: '240px', display: 'inline-block' }}><NavLink to={`/categories/${category._id}`} className="link"><strong>{category.name}</strong></NavLink></div>
                <div style={{ width: '50px', display: 'inline-block' }}>${category.amount}</div>
              </div>
              <button className="button" onClick={() => removeCategory(category._id)}>X</button>
              <button className="button" onClick={()=> this.setState({ editing: category._id })}>✎</button>
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
    loading: state.categoriesLoading,
    user: state.auth.user

  }),
  { loadCategories, addCategory, removeCategory, updateCategory }
)(Category);