import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCategory, updateCategory, removeCategory } from './actions';


class Categories extends PureComponent {
  
  componentDidMount() {
    if(!this.props.categories.length) {
      this.props.addCategory({ name: 'Food', budget: 300 });
      this.props.addCategory({ name: 'Dog Treats', budget: 500 });
    }
  } 

  render() {
    return (
      <div>
        <ul>
          {this.props.categories.map(category =>(
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
  state => ({ categories: state }),
  { addCategory, updateCategory, removeCategory }
)(Categories);