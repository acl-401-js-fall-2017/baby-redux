import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadCategories, addCategory, updateCategory, removeCategory } from './actions';
import CategoryForm from './CategoryForm';
import CategoryItem from './CategoryItem';

class Dashboard extends PureComponent {

  componentDidMount() {
    this.props.loadCategories();
  }
  handleAdd = category => {
    const { name, budget } = category;
    this.props.addCategory({ name, budget });
  }
  handleUpdate = category => {
    const { _id, name, budget } = category;
    this.props.updateCategory({ _id, name, budget });
  }

  handleRemove = id => {
    this.props.removeCategory(id);
  }
  render() {
    const { categories, loading, error } = this.props;
    return(
      <div>
        <div>
          <CategoryForm text="Add" onComplete={this.handleAdd}/>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {categories.map(category => (
                <CategoryItem category={category} onRemove={this.handleRemove} onUpdate={this.handleUpdate} key={category._id}/>
              ))}
            </tbody>
          </table>
        </div>
        {loading && 
            <div className="loader">
              Loading...
            </div>
        }
        {error && 
            <div className="error">
              {Array.isArray(error) 
                ? <ul>error.map(err => <li>err</li>)</ul>
                : error.error ? error.error : error
              }
            </div>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{ 
    categories: state.categories,
    loading: state.loading,
    error: state.error
  };
}


export default connect(
  mapStateToProps,
  { loadCategories, addCategory, updateCategory, removeCategory }
)(Dashboard);