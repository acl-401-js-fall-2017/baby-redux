import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { StyledButton } from '../styles/styled';
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
        <CategoryForm onComplete={addCategory}></CategoryForm>
        {categories.map(category => (
          <div key={category._id}>
            <h4>
              {category.name} with budget of: ${category.budget}
            </h4>
            {!category.showExpense && 
                  <StyledButton className="expensebtn" onClick={() => updateCategory({ ...category, showExpense: true })}>
                    Expenses
                  </StyledButton> 
            }
            {category.showExpense && 
                  <Expenses category={category}/>
            }
            {!category.showExpense &&
                <StyledButton className="removebtn" onClick={() => removeCategory(category._id)}>Remove</StyledButton>
            }
            {!category.showExpense && <h5> Update {category.name}'s Budget </h5>}
            {!category.showExpense && <CategoryForm category={category} text="Update" onComplete={updateCategory}/>}
          </div>
        ))}
      </div>

    );
  }
}

export default connect(
  ({ categories }) => ({ categories }),
  { addCategory, updateCategory, removeCategory, loadCategories }
)(Categories);
