import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCategory, updateCategory, removeCategory } from './actions';
import CategoryForm from './CategoryForm';

class Categories extends PureComponent {

  handleAdd = category => {
    this.props.addCategory(category);
  }

  handleUpdate = category => {
    this.props.updateCategory(category);
  }

  handleRemove = _id => {
    this.props.removeCategory(_id);
  }

  render() {
    const { categories } = this.props;
    return (
      <div>
        <CategoryForm onComplete={this.handleAdd}/>
        <ul>
          {categories.map(category => (
            <li key={category._id}>
              <CategoryForm category={category} text="Update"
                onComplete={this.handleUpdate}
              />
              <button className="button" onClick={() => this.handleRemove(category._id)}>
              Remove</button>
            </li>))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state
  };
}

export default connect(
  mapStateToProps,
  { addCategory, updateCategory, removeCategory }
)(Categories);