import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadCategories, addCategory, updateCategory, removeCategory } from './actions';
import { Route, Link } from 'react-router-dom';
import Expenses from '../expenses/Expenses';
import CategoryForm from './CategoryForm';
import { ClipLoader } from 'react-spinners';

class Category extends PureComponent {

  componentDidMount() {
    this.props.loadCategories();
  }

  handleUpdate = category => {
    const { _id, name, budget } = category;
    this.props.updateCategory({ _id, name, budget });
  }

  handleAdd = category => {
    const { name, budget } = category;
    this.props.addCategory({ name, budget });
  }

  handleRemove = category => {
    this.props.removeCategory(category._id);
  }

  render() {
    const { category, loading, error } = this.props;

    const categories = (error) ? <h5 className="error">{error}</h5> : (
      <div className="block">
      
        <div className="columns">
          <div className="column"></div>
          <div className="column">
            <CategoryForm text="Add"
              onComplete={this.handleAdd}/>
          </div>
          <div className="column"></div>
        </div>

        {category.map(c => { 
          return (<div className="block" key={c._id}>
            <div className="columns">

              <div className="column">
                <Link to={`/categories/${c._id}`}>{c.name}</Link>
              </div>
              <div className="column">
                {c.budget}
              </div>
              <div className="column">
                <CategoryForm category={c} text="Update"
                  onComplete={this.handleUpdate}/>
              </div>
              <div className="column">
                <button className="delete is-large" onClick={() => this.handleRemove(c)}>X</button>
              </div>
              <div className="column is-half">
              </div>
              
            </div>
            <Route path={`/categories/${c._id}`} render={() => <div className="column is-half"><Expenses id={c._id}/></div>}/>
          </div>);    
        })}


      </div>
    );

    return (
      <div className='content is-medium'>
        {loading && <ClipLoader color="#42f4b6"/> }
        {categories}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    category: state.category,
    loading: state.loading,
    error: state.error
  };
}

export default connect(
  mapStateToProps,
  { loadCategories, addCategory, updateCategory, removeCategory }
)(Category);