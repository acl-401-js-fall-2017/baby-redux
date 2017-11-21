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

  handleRemove = id => {
    this.props.removeCategory(id);
  }

  render() {
    const { categories } = this.props;   // destructured

    return (
      <div>
        <CategoryForm onComplete={this.handleAdd}/>
        <ul>
          {categories.map(category => (
            <li key={category._id}>
              <h4>
                {category.name}
                <button onClick={() => this.handleRemove(category._id)}>Remove</button>
              </h4>
              <CategoryForm category={category} text="Update"
                onComplete={this.handleUpdate}/>
            </li>)) }
          ))}
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
  { addCategory, updateCategory, removeCategory }     // = mapDispatchToProps, calling bindActionCreator under the hood
)(Categories);
