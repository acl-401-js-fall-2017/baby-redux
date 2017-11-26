import React, { PureComponent } from 'react';
import CategoryForm from './CategoryForm';
import { connect } from 'react-redux';
import {
  removeCategory,
  updateCategory
} from '../categories/actions';





class CategoryItem extends PureComponent {

  handleDelete = id => () => this.props.onRemoveCategory({ id });

  handleUpdate = oldCat => e => {
    e.preventDefault();
    this.props.onUpdateCategory({
      ...oldCat,
      name: e.target.name.value,
      budget: e.target.budget.value
    });
  }

  render() {
    const { category } = this.props;
    console.log(this.props.children);
    return (
      <article>
        <h3>{category.name}</h3>
        <p>Budget: ${category.budget}</p>
        <p>Last Update: {JSON.stringify(category.timestamp)}</p>
        <input type="button" value="delete" onClick={this.handleDelete(category.id)}/>
        <CategoryForm
          onComplete={this.handleUpdate(category)}
          buttonText={'Update'}
        />
      </article>
    );
  }
}




function matchDispatchToProps(dispatch) {
  return {
    onRemoveCategory: id => {
      dispatch(removeCategory(id));
    },
    onUpdateCategory: category => {
      dispatch(updateCategory(category));
    }
  };
}

const connectedCategoryItem = connect(
  null,
  matchDispatchToProps
)(CategoryItem);

export default connectedCategoryItem;