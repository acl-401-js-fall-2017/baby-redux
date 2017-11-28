import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCategory } from '../categories/actions';
import CategoryForm from '../categories/CategoryForm';
import CategoryItem from '../categories/CategoryItem';

class Dashboard extends PureComponent {

  componentDidMount() {
		const intialBudget = {
      name: 'Groceries',
      budget: 150
    }
    this.props.onAddCategory(intialBudget);
  }

  handleAdd = event => {
		event.preventDefault();
		event = event.target;
		const newBudget = {
      name: event.name.value,
      budget: event.budget.value
    }
    this.props.onAddCategory(newBudget);
    event.reset();
  }
  
  render() {

    return (
      <div>
        <h1>Budget Dashboard</h1>
        {this.props.categories.map(categoryItem => (
					<CategoryItem key={categoryItem.id} category={categoryItem}/>
				))}
				<br/>
				<h4>create new budget</h4>
				<CategoryForm onComplete={this.handleAdd} buttonText={'create'}/>
      </div>
    );
  }
}


const dispatchToProps = dispatch => {
	return {
		onAddCategory: newCategory => {
			dispatch(addCategory(newCategory));
		}
	};
}
const stateToProps = state => {
  return {
    categories: state
  };
}


const ConnectedDash = connect(
  stateToProps,
  dispatchToProps
)(Dashboard);

export default ConnectedDash;