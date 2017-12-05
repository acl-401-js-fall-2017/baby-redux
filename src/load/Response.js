import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { responseLoadAction } from './actions';

class Response extends PureComponent {
  render() {
    return (
      <div>
        <form onSubmit={async event => {
          event.preventDefault();
          const form = event.target;
          
          try { 
            {/* const options = form.elements.budget.value !== 0 ? form.elements.budget.value : { validation: 'input must be greater than 0' }; */}
            const options = form.elements.budget.value;
            await responseLoadAction(options);
            form.reset();
          }
          catch(err) {
            throw err;  
          }
        }}>
        </form>
      </div>
    );
  }
}

export default connect(
  state => ({ response: state.response }),
  { responseLoadAction }
)(Response);