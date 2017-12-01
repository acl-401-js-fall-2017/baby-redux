import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { updateCategory, loadCategories } from './actions';
import styled from 'styled-components';

export class NewCategory extends PureComponent {
  
  state = {
    editing: false
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.editing === this.props.editing) return;
    if (nextProps.editing) this.setState({ editing: true });
  }

  handleUpdate = update => {
    this.props.updateCategory(this.props.category._id, update);
  }

  handleSubmit =  event => {
    event.preventDefault();
    const { elements } = event.target;
    const category = {
      name: elements.name.value,
      budget: elements.budget.value
    };
    this.handleUpdate(category);
    this.setState({ editing: false });
  }

  render() {
    const { editing } = this.state;
    return (
      <div>
        { editing &&
          <form onSubmit={this.handleSubmit}>
            <input name="name" placeholder={this.props.category.name}/>
            <input name="budget" placeholder={this.props.category.budget}/>
            <button type="submit">Update</button>
          </form> 
        }
      </div>
    );
  }
}

export default connect( 
  state => ({ categories: state }),
  { updateCategory, loadCategories },
  (stateProps, dispatchProps, ownProps) => ({ 
    updateCategory: dispatchProps.updateCategory,
    loadCategories: dispatchProps.loadCategories,
    editing: ownProps.editing,
    category: ownProps.categoryToUpdate
  })
)(NewCategory);

const UpdateDiv = styled.div`
display: ${props => props.editing? 'flex' : 'none'}
`;