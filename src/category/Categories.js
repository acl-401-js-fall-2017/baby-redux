import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCategory, updateCategory, removeCategory, loadCategories } from './actions';


class Categories extends PureComponent {
  
  componentDidMount() {
    this.props.loadCategories();
  } 

  render() {
    console.log(this.props);
    if(!this.props.categories) return <div>Loading...</div>;
    return (
      <div>
        <ul>
          {this.props.categories.map(category =>(
            <li type="none" key={category._id}>
              <h4>budget for {category.name} is {category.budget} </h4>
              <button onClick={()=> this.props.removeCategory(category._id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect( 
  state => ({ categories: state.categories }),
  { addCategory, updateCategory, removeCategory, loadCategories }
)(Categories);