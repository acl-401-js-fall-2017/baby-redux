import React, { PureComponent } from 'react';
import CategoryForm from '../categories/CategoryForm';
import CategoryItem from '../categories/CategoryItem';

import { connect } from 'react-redux';
import { addCategory } from '../categories/actions';





class Dashboard extends PureComponent {

  componentDidMount() {
    this.props.onAddCategory({
      name: 'Black Friday',
      budget: 300
    });
    this.props.onAddCategory({
      name: 'Cyber Monday',
      budget: 700
    });
  }

  handleAdd = e => {
    e.preventDefault();
    this.props.onAddCategory({
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
        {this.props.categories.map(cat => (
          <CategoryItem
            key={cat.id}
            category={cat}
          />
        ))}
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
    }
  };
}

const ConnectedDash = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default ConnectedDash;