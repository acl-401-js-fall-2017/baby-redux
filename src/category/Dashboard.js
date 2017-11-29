import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCategory, updateCategory, removeCategory } from './actions';
import CategoryForm from './CategoryForm';

class Dashboard extends PureComponent {

  handleAdd = category => {
    this.props.addCategory(category);
  }
  render() {
    const { categories } = this.props;
    return(
      <div>
        <CategoryForm onComplete={this.handleAdd}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{ 
    categories: state
  };
}


export default connect(
  mapStateToProps,
  { addCategory, updateCategory, removeCategory }
)(Dashboard);