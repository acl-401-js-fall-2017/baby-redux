import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { updateCategory, removeCategory } from './actions';
class CategoryItem extends PureComponent {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{ 
    null: state
  };
}

export default connect(
  mapStateToProps,
  { updateCategory, removeCategory }
)(CategoryItem);