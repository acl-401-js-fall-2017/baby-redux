import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { clearError } from './actions';
import './Error.css';

class Error extends PureComponent {
  render() {
    return(
      <footer className="error-bar">
        <strong>Error: </strong>{this.props.error}
        <div
          className="remove-button"
          onClick={this.props.clearError}
        >X</div>
      </footer>
    );
  }
}

export default connect(
  state => ({ error: state.error }),
  { clearError }
)(Error);