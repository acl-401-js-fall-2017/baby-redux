import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCategory, updateCategory, removeCategory, loadCategories } from './actions';


class Categories extends PureComponent {
  
  componentDidMount() {
    if(!this.props.state.categories.length) {
      this.props.loadCategories();
    }
  } 

  render() {
    console.log('state is:', this.props.state);
    return (
      <div>
        <ul>
          {this.props.state.categories.map(category =>(
            <li type="none" key={category._id}>
              <h4>budget for {category.name} is {category.budget} </h4>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect( 
  state => ({ state: state }),
  { addCategory, updateCategory, removeCategory, loadCategories }
)(Categories);