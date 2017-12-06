import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadCategory, addCategory, updateCategory, removeCategory } from './actions';
import CategoryForm from './CategoryForm';
import styled from 'styled-components';


class Categories extends PureComponent {
  
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
      <div>
        { error && <div className="error">{error}</div> }
        <CategoryForm onComplete={this.handleAdd}/>
        <ul>
          <h2>Budget Category</h2>
          {categories.map(category => (
            <li key={category._id}>
              <h4>
                The budget for {category.name} is ${category.budget}
                <RemoveButton onClick={() => this.handleRemove(category._id)}>Remove</RemoveButton>
              </h4>
              <CategoryForm className="update" category={category} text="Update" onComplete={this.handleUpdate}/>
            </li>)) }
        </ul>
      </div>
    );
  }
}

const RemoveButton = styled.button`
  background: white;
  color: red;
  border: 1px solid black;
  margin: 0 1em;
  height: ${props => props.dimension || 20}px;
  width: ${props => props.dimension || 60}px;

  &:hover {
    background-color: #ffb3b3;
  }
`;


const mapStateToProps = (state) => ({
  state : state,
  categories: state.categoryReducer,
  error: state.categoriesError
});

export default connect(
  mapStateToProps, 
  { loadCategory, addCategory, updateCategory, removeCategory }     // = mapDispatchToProps, calling bindActionCreator under the hood
)(Categories);
