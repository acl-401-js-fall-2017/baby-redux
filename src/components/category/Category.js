import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
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
  loadCategory,
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
    const { categories, loadCategory, error } = this.props;

    const showResponse = categories
      ? <pre>{JSON.stringify(categories, true, 2)}</pre>
      : <div>No response</div>;

    return (
      <div>
        { error && <div className="error">{error}</div> }
        <CategoryForm onComplete={this.handleAdd} isAdd={true}/>
        <ul>
          {categories.map(category => (
            <li key={category._id}>
              <h3>
                For:{category.name} Amount: ${category.amount}
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