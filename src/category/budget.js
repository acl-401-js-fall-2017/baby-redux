import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCategory, updateCategory, removeCategory } from './budget';
// import BudgetForm from './BudgetForm';

class Budget extends PureComponent {

  componentDidMount() {
    this.props.addCategory({ name: 'rent', amount: 1700 });

  }
}

// export default connect(
//   mapStateToProps,
//   { addCategory, updateCategory, removeCategory }
// )(Budget);