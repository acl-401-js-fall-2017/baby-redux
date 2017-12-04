import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCategory, updateCategory, removeCategory, loadCategories } from './actions';
import UpdateForm from './UpdateForm';
import { Link } from 'react-router-dom';
import AddExpense from './AddExpense';

class Expenses extends PureComponent {

  state = { display: '' }

  componentDidMount() {
    this.props.loadCategories();
  } 


  render() {

    const { id } = this.props.match.params;
    console.log(id, this.props);
    const category = this.props.categories? this.props.categories.filter(p => p._id === id)[0]: {};
    console.log('category is', category);
    
    return (
      <div>
        <AddExpense categoryToUpdate ={category}/>
        <ul>
          {this.props.categories &&
            category.expenses && category.expenses.map(expense =>(
              <li style={{ display:'flex', justifyContent: 'center' }} type="none" key={category._id}>
                <h4>Spend {expense.amount} on {expense.name} </h4>
                <button style={{ height:'50%' }} onClick={()=> this.props.removeCategory(category._id)}>X</button>
                <button style={{ height:'50%' }} onClick={()=> this.setState({ display: category._id })}>update</button>
                <UpdateForm categoryToUpdate ={category} editing ={this.state.display===category._id}/>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default connect( 
  state => ({ categories: state.categories, error: state.categoryError }),
  { addCategory, updateCategory, removeCategory, loadCategories }
)(Expenses);

