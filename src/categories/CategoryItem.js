import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
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
    const { category, match: { match: { url } } } = this.props;
    return (
      <article>
        <Link to={url + category.name}>
          <h3 onClick={() => console.log(url + category.name)}>{category.name}
            <small>&nbsp;&nbsp;&nbsp;&nbsp;budget: ${category.budget}</small>
          </h3>
        </Link>
        <p>Last Update: {JSON.stringify(category.timestamp)}</p>
        <CategoryForm
          onComplete={this.handleUpdate(category)}
          onDelete={this.handleDelete(category.id)}
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