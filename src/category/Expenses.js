import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCategory, updateCategory, removeCategory, loadCategories } from './actions';
import AddExpense from './AddExpense';

class Expenses extends PureComponent {

  state = { display: '' }

  componentDidMount() {
    this.props.loadCategories();
  } 


  render() {

    const { id } = this.props.match.params;
    const category = this.props.categories? this.props.categories.filter(p => p._id === id)[0]: {};
    
    if (!this.props.categories || !category) return <div></div>;

    return (
      <div>
        <h4> {category.name} </h4>
        <AddExpense categoryToUpdate ={category}/>
        <ul>
          {
            category.expenses && 
                category.expenses.map(expense =>(
                  <li style={{ display:'flex', justifyContent: 'center' }} type="none" key={category._id}>
                    <h4>Spend {expense.amount} on {expense.name} </h4>
                    {/* <button style={{ height:'50%' }} onClick={()=> this.props.removeExpense(category._id)}>X</button> */}
                  </li>
                ))
          }
        </ul>
      </div>
    );
  }
}

export default connect( 
  state => ({ categories: state.categories, error: state.categoryError }),
  { addCategory, updateCategory, removeCategory, loadCategories }
)(Expenses);

