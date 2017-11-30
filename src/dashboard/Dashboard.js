import React, { PureComponent } from 'react';
import CategoryForm from '../categories/CategoryForm';
import CategoryItem from '../categories/CategoryItem';
import Loader from '../loader/Loader';
import Error from '../error/Error';

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
    const { categories, loading, error } = this.props;
    return (
      <div>
        <h1>Dash</h1>
        <CategoryForm
          onComplete={this.handleAdd}
          buttonText={'Add'}
        />
        {loading &&
          <Loader/>
        }
        {error &&
          <Error error="error"/>
        }
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
    categories: state.categories,
    loading: state.loading,
    error: state.error
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