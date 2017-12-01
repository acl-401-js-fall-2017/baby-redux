import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCategory, loadCategories } from '../categories/actions';
import CategoryForm from '../categories/CategoryForm';
import CategoryItem from '../categories/CategoryItem';
import categoriesApi from '../services/categoriesApi';

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

    return (
      <div>
        <h1>Budget Dashboard</h1>
        {this.props.categories.map((categoryItem, index) => (
			<CategoryItem key={index} category={categoryItem}/>
		))}
		<br/>
		<h4>create new budget</h4>
		<CategoryForm onComplete={this.handleAdd} buttonText={'create'}/>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    categories: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddCategory: newCategory => {
      dispatch(addCategory(newCategory));
    },
    onLoadCategory: () => {
      dispatch(loadCategories());
    }
  };
}

const ConnectedDash = connect(
  state => ({
    categories: state
  }),
  { addCategory, loadCategories }
)(Dashboard);

export default ConnectedDash;