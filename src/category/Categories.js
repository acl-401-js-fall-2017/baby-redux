import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCategory, updateCategory, removeCategory, loadCategories } from './actions';
import UpdateForm from './UpdateForm';



class Categories extends PureComponent {

  state = { display: '' }
  
  componentDidMount() {
    this.props.loadCategories();
  } 

  render() {
    if(!this.props.categories) return <div></div>;
    
    return (
      <div>
        <ul>
          {this.props.categories.map(category =>(
            <li style={{ display:'flex', justifyContent: 'center' }} type="none" key={category._id}>
              <h4>budget for {category.name} is {category.budget} </h4>
              <button style={{ height:'50%' }} onClick={()=> this.props.removeCategory(category._id)}>X</button>
              <button style={{ height:'50%' }} onClick={()=> this.setState({ display: category._id })}>update</button>
              <UpdateForm categoryToUpdate ={category} editing ={this.state.display===category._id}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect( 
  state => ({ categories: state.categories, error: state.categoryError }),
  { addCategory, updateCategory, removeCategory, loadCategories }
)(Categories);

