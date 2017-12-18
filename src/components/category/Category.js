import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCategory, updateCategory, loadCategory, removeCategory } from './category.actions';
import CategoryForm from './CategoryForm';

function mapStateToProps({ categories }) {
  return {
    categories
  };
}

const mapDispatchToProps = {
  addCategory,
  updateCategory,
  removeCategory,
  loadCategory
};

class Category extends PureComponent {
  
  componentDidMount() {
    this.props.loadCategory();
  }
  handleAdd = expense => {
    this.props.addCategory(expense);
  }
  handleUpdate = expense => {
    this.props.updateCategory(expense);
  }
  handleRemove = id => {
    this.props.removeCategory(id);
  }
  
  render() {
    const { categories, error } = this.props;

    return (
      <div>
        { error && <div className="error">{error}</div> }
        <CategoryForm onComplete={this.handleAdd} isAdd={true}/>
        <ul>
          {categories.map(category => (
            <li key={category._id}>
              <h3>
                <Link to={`/categories/${category._id}`}> For: {category.name} Amount: ${category.amount} </Link>
                <button onClick={() => this.handleRemove(category._id)}>⨂</button>
              </h3>  
              <CategoryForm category={category} text="Update"
                onComplete={this.handleUpdate} isAdd={false}/>
            </li>))}
        </ul>  
      </div>  
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);