import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import CategoryPage from './CategoryPage';

export default class CategoryRouter extends PureComponent {
  render() {
    const { categories, url } = this.props;
    return (
      <section className="Category-router">
        {categories.length > 0 &&
          categories.map(category => {
            console.log(url + category.name);
            return (
              <Route key={category.id} path={url + category.name} render={() => (
                <CategoryPage 
                  name={category.name} 
                  budget={category.budget} 
                  categoryId={category.id}
                  expenses = {category.expenses}
                />
              )}/>
            );
          })
        }
      </section>
    );
  }
}