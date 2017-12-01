import React, { PureComponent } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import CategoryRouter from '../categories/CategoryRouter';
import CategoryPage from '../categories/CategoryPage';
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
    const { categories, loading, error, match: { url } } = this.props;
    return (
      <div>
        <Link to={url}>
          <h1>Dash</h1>
        </Link>
        <CategoryForm
          onComplete={this.handleAdd}
          buttonText={'Add'}
        />
        {loading &&
          <Loader />
        }
        {error &&
          <Error error="error" />
        }
        <Switch>         
          <Route exact path={url} render={match => (
            categories.map(cat => (
              <CategoryItem
                key={cat.id}
                category={cat}
                match={match}
              />
            ))
          )}/>
          <CategoryRouter categories={categories} url={url}/>
        </Switch>
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