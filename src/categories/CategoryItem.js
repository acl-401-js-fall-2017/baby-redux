import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import CategoryForm from './CategoryForm';
import { connect } from 'react-redux';
import {
  removeCategory,
  updateCategory
} from '../categories/actions';
import './CategoryItem.css';

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
    const { category, match: { match: { url } } } = this.props;

    return (
      <tr>
        <td>
          <Link to={url + category.name}>
            {category.name}
          </Link>
        </td>
        <td>${category.budget}</td>
        <td>{JSON.stringify(category.timestamp)}</td>
        <td>
          <CategoryForm
            onComplete={this.handleUpdate(category)}
            onDelete={this.handleDelete(category.id)}
            buttonText="update"
          />
        </td>
      </tr>
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