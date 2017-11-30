import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadCategory, addCategory, updateCategory, removeCategory } from './actions';
import CategoryForm from './CategoryForm';


class Categories extends PureComponent {
  
  componentDidMount() {
    this.props.loadCategory();
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
    const { categories, error } = this.props;   // destructured
    
    return (
      <div>
        { error && <div className="error">{error}</div> }
        <CategoryForm onComplete={this.handleAdd}/>
        <ul>
          {categories.map(category => (
            <li key={category._id}>
              <h4>
                The budget for {category.name} is ${category.budget}
                <button onClick={() => this.handleRemove(category._id)}>Remove</button>
              </h4>
              <CategoryForm category={category} text="Update"
                onComplete={this.handleUpdate}/>
            </li>)) }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categoryReducer,
  error: state.categoriesError
});

export default connect(
  mapStateToProps, 
  { loadCategory, addCategory, updateCategory, removeCategory }     // = mapDispatchToProps, calling bindActionCreator under the hood
)(Categories);
