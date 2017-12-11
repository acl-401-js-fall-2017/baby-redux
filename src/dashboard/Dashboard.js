import React, { PureComponent } from 'react';
import CategoryForm from '../categories/CategoryForm';
import CategoryItem from '../categories/CategoryItem';

import { connect } from 'react-redux';
import { getCategories, addCategory } from '../categories/actions';


class Dashboard extends PureComponent {

  componentDidMount() {
    this.props.getCategories();
  }

  handleAdd = e => {
    e.preventDefault();
    this.props.addCategory({
      name: e.target.name.value,
      budget: e.target.budget.value
    });
    e.target.reset();
  }
  
  render() {
    return (
      <div>
        <h1>Dash</h1>
        <CategoryForm
          onComplete={this.handleAdd}
          buttonText={'Add'}
        />
        {
          this.props.categories.map(cat => (
            <CategoryItem
              key={cat.id}
              category={cat}
            />
          ))
        }
      </div>
    );
  }
}





function mapStateToProps(state) {
  return {
    categories: state
  };
}

const ConnectedDash = connect(
  mapStateToProps,
  {
    addCategory,
    getCategories
  }
)(Dashboard);

export default ConnectedDash;