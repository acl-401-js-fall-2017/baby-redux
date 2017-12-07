import React, { PureComponent } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import CategoryRouter from '../categories/CategoryRouter';
import CategoryForm from '../categories/CategoryForm';
import CategoryItem from '../categories/CategoryItem';
import Loader from '../loader/Loader';
import ErrorBar from '../error/ErrorBar';

import { connect } from 'react-redux';
import { getCategories, addCategory } from '../categories/actions';

import './Dashboard.css';


class Dashboard extends PureComponent {

  componentDidMount() {
    this.props.getCategories();
  }

  getTotalBudget = () => {
    const { categories } = this.props;
    return categories ? categories.reduce((total, category) => total + category.budget, 0) : 0;
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
    const { categories, totalBudget, loading, error, match: { url } } = this.props;
    return (
      <div>
        <Link to={url}>
          <img className="home-link" src="https://images.vexels.com/media/users/3/140527/isolated/preview/449b95d58f554656b159dd3ca21ab123-home-round-icon-by-vexels.png"/>
        </Link>
        <Route exact path={url} render={() => (
          <header>
            <h1>Categories</h1>
          </header>
        )}/>
        <Route exact path={url} render={() => (
          <aside>
            <h3>Total Budget: ${this.getTotalBudget()}</h3>
            <div className="category-bar-divider">&nbsp;</div>
            <CategoryForm
              onComplete={this.handleAdd}
              buttonText="Add"
              editing="new category"
            />
          </aside>
        )}/>
        {loading &&
          <Loader />
        }
        {error &&
          <ErrorBar error="error" />
        }
        <Switch>         
          <Route exact path={url} render={match => (
            <section className="category-list">
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Budget</th>
                    <th>Last Update</th>
                    <th></th>
                  </tr>
                  {categories.map(cat => (
                    <CategoryItem
                      key={cat.id}
                      category={cat}
                      match={match}
                    />
                  ))}
                </tbody>
              </table>
            </section>
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
    totalBudget: state.totalBudget,
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