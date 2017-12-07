import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadCategory, addCategory, updateCategory, removeCategory } from './actions';
import CategoryForm from './CategoryForm';
import Category from './Category';
import { List } from '../styles/style';
import styled from 'styled-components';


class Categories extends PureComponent {
  
  componentDidMount() {
    this.props.loadCategory();
    
  }
  
  handleAdd = category => {
    this.props.addCategory(category);
  }
  
  handleUpdate = (id, data) => {
    this.props.updateCategory(id, data);
  }
  
  handleRemove = id => {
    this.props.removeCategory(id);
  }
  
  render() {
    const { categories, error } = this.props;   
    return (
      <div>
        { error && <div className="error">{error}</div> }
        <CategoryForm onComplete={this.handleAdd}/>
        <List>
          <h2>Budget List</h2>
          {categories.map(category => (
            <Category key={category._id} 
              category={category} 
              onRemove={this.handleRemove} 
              onUpdate={this.handleUpdate}/>
          )) }
        </List>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state : state,
  categories: state.categoryReducer,
  error: state.categoriesError
});

export default connect(
  mapStateToProps, 
  { loadCategory, addCategory, updateCategory, removeCategory }     // = mapDispatchToProps, calling bindActionCreator under the hood
)(Categories);
