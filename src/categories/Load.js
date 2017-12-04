import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Load extends PureComponent {
  render() {
    return (
        <div>
        <div className="loader">
        </div>
      {this.props.error && 
        <div className="error">
          {Array.isArray(this.props.error) 
            ? <ul>error.map(err => <li>err</li>)</ul>
            : this.props.error.error ? this.props.error.error : this.props.error
          }
        </div>
      }
      </div> 
    );
  }
}

const ConnectedLoad = connect(
    state => ({
      error: state.error
    }),
  null
  )(Load);
  
export default ConnectedLoad;