import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadCategory, addCategory, updateCategory, removeCategory } from './actions';
import CategoryForm from './CategoryForm';
import Category from './Category';
import Expenses from '../expense/Expenses';
import { List } from '../styles/style';

class Categories extends Component {
  
  componentDidMount() {
    this.props.loadCategory();
    
  }
  
  handleAdd = category => {
    this.props.addCategory(category);
  }
  
  handleUpdate = (id, data) => {
    this.props.updateCategory(id, data);
  }
  
  handleRemove = id => {
    this.props.removeCategory(id);
  }
  
  render() {
    const { categories, error } = this.props;   
    return (
      <Switch>
        {/* <Route exact path="/expenses" component={Expenses}/> */}
        <Route exact path="/" render={() => (
          <div>
            { error && <div className="error">{error}</div> }
            <CategoryForm onComplete={this.handleAdd}/>
            <List>
              <h2>Budget List</h2>
              {categories.map(category => (
                <Category key={category._id} 
                  category={category} 
                  onRemove={this.handleRemove} 
                  onUpdate={this.handleUpdate}/>
              )) }
            </List>
          </div>
        )}/>
      </Switch>
    );
  }
}

const mapStateToProps = (state) => ({
  state : state,
  categories: state.categories,
  error: state.categoriesError
});

export default withRouter(connect(
  mapStateToProps, 
  { loadCategory, addCategory, updateCategory, removeCategory }     // = mapDispatchToProps, calling bindActionCreator under the hood
)(Categories));
