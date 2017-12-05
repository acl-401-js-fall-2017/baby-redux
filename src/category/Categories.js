import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCategory, updateCategory, removeCategory, loadCategories } from './actions';

import CategoryForm from './CategoryForm';
import Expenses from '../expense/Expenses';

class Categories extends PureComponent {

  componentDidMount() {
    this.props.loadCategories();
  }

  render() {
    const { categories, updateCategory, addCategory, removeCategory } = this.props;
    
    return (
      <div>
        <h4>Add a Budget</h4>
        <CategoryForm onComplete={addCategory}/>
        <ul>
          {categories.map(category => (
            <li key={category._id}>
              <h4>
                {category.name} with budget of: ${category.budget}
                {!category.showExpense && 
                  <button onClick={() => updateCategory({ ...category, showExpense: true })}>
                    Expenses
                  </button> 
                }
                
                {category.showExpense && 
                  <Expenses categoryId={category._id} />
                }

                <button onClick={() => removeCategory(category._id)}>Remove</button>
              </h4>
              <CategoryForm category={category} text="Update" 
                onComplete={updateCategory}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  ({ categories }) => ({ categories }),
  { addCategory, updateCategory, removeCategory, loadCategories }
)(Categories);