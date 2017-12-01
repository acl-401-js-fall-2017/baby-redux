import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadResponse } from './actions';

class Response extends PureComponent {
  render() {
    const { response, loadResponse } = this.props;

    const showResponse = response 
      ? <pre>{JSON.stringify(response, true, 1)}</pre>
      : <div>No Response</div>;

    return (
      <div>
        <button onClick={() => loadResponse({ wait:1500 })}>
          Load with wait
        </button>
        <button onClick={() => loadResponse({ unexpected: true })}>
          Load with Unexpected Error
        </button>

        <form onSubmit={async event => {
          event.preventDefault();
          const form = event.target;
          
          try { 
            const options = form.elements.budget.value !== 0 ? null : { validation: 'input must be greater than 0' };
            await loadResponse(options);
            form.reset();
          }
          catch(err) {
            throw err;  //is this right? or should I return some state (response: state.response)?
          }
        }}>
          <input name="budget"/>
          <button type="Submit">Load with Validation Error Unless > 0 </button>
        </form>
        {showResponse}
      </div>
    );
  }
}

export default connect(
  state => ({ response: state.response }),
  { loadResponse }
)(Response);