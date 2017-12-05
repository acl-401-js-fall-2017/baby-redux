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

  handleAdd = event => {
		event.preventDefault();
		event = event.target;
		const newBudget = {
      name: event.name.value,
      budget: event.budget.value
    }
    this.props.addCategory(newBudget);
    event.reset();
  }
  
  render() {
    const cats = this.props.categories && this.props.categories.map((categoryItem, index) => (
			<CategoryItem key={index} category={categoryItem}/>
    ));
      

    return (
      <div>
        <div>
        <h1>Budget Dashboard</h1>
        {cats}
        <br/>
        <h4>create new budget</h4>
        <CategoryForm onComplete={this.handleAdd} buttonText={'create'}/>
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