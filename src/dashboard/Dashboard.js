import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCategory, loadCategories } from '../categories/actions';
import CategoryForm from '../categories/CategoryForm';
import CategoryItem from '../categories/CategoryItem';
import categoriesApi from '../services/categoriesApi';
import Load from '../categories/Load';

class Dashboard extends PureComponent {

  async componentDidMount() {
    this.props.loadCategories();
  }

  handleAddCategory = event => {
		event.preventDefault();
		const newCategory = {
      name: event.target.name.value,
      budget: event.target.budget.value
    }
    this.props.addCategory(newCategory);
    event.target.reset();
  }
  
  render() {
    const formStyle = { float: 'right', margin: '30px 20px'}
    const listStyle = { float: 'right', listStyle: 'none'}
    let budgetSum = 0;
    const sortedCategories = this.props.categories ? this.props.categories.sort((a, b) => a.budget < b.budget) : [];
    const categories = sortedCategories.map((categoryItem, index) => {
      budgetSum += categoryItem.budget;
			return (<li key={index}><CategoryItem category={categoryItem}/></li>)
    });
    
    return (
      <div>
        <div>
        <h1>Budget Dashboard</h1>
        <h1>Total: ${budgetSum}</h1>
        <div style={formStyle}>
          <h4>Add New Category</h4>
          <CategoryForm onComplete={this.handleAddCategory} buttonText={'create'}/>
        </div>
        <ul style={listStyle} >
          {categories}
        </ul>
      </div>
    </div>
    );
  }
}

const ConnectedDash = connect(
  state => ({
    categories: state.categories,
    loading: state.loading,
    error: state.error
  }),
  { addCategory, loadCategories }
)(Dashboard);

export default ConnectedDash;