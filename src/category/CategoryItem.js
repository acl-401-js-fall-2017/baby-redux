import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { updateCategory, removeCategory } from './actions';
import CategoryForm from './CategoryForm';
class CategoryItem extends PureComponent {

  render() {
    const { category, onRemove, onUpdate } = this.props;
    return (
      <tr>
        <td>{category.name}</td>
        <td>{category.budget}</td>
        <td>
          <button onClick={() => onRemove(category._id)}>
              X
          </button>
        </td>
        <td>
          <CategoryForm category={category} text="Update" onComplete={() => onUpdate(category)}/>
        </td>
      </tr> 
    );
  }
}

function mapStateToProps(state) {
  return{ 
    null: state
  };
}

export default connect(
  mapStateToProps,
  { updateCategory, removeCategory }
)(CategoryItem);