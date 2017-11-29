import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCategory, updateCategory, removeCategory, loadCategories } from './actions';

import CategoryForm from './CategoryForm';

class Categories extends PureComponent {

  componentDidMount() {
    this.props.loadCategories();
  }

  handleAdd = category => {
    this.props.addCategory(category);
  }

  handleUpdate = category => {
    this.props.updateCategory(category);
  }

  handleRemove = id => {
    this.props.removeCategory(id);
  }

  render() {
    const { categories } = this.props;
    
    return (
      <div>
        <CategoryForm onComplete={this.handleAdd}/>
        <ul>
          {categories.map(category => (
            <li key={category._id}>
              <h4>
                {category.name} with budget of: {category.budget}
                <button onClick={() => this.handleRemove(category._id)}>Remove</button>
              </h4>
              <CategoryForm category={category} text="Update" 
                onComplete={this.handleUpdate}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  };
}

export default connect(
  mapStateToProps,
  { addCategory, updateCategory, removeCategory, loadCategories }
)(Categories);