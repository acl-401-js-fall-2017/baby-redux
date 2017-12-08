import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadingResponse, } from './actions';

class Response extends PureComponent {

  render() {
    const { loadingResponse, response } = this.props;

    const showResponse = response
      ? <pre>{JSON.stringify(response, true, 2)}</pre>
      : <div> No Response </div>;

    return (
      <div>
        <button onClick={() => loadingResponse({ wait: 1500 })}>
          Simulated Server Load wait
        </button>
        <button onClick={() => loadingResponse({ unexpected: true })}>
          Simulated Unexpected Error
        </button>

        <form onSubmit={async event => {
          event.preventDefault();
          const form = event.target;
          try {
            const options = form.elements.answer.value === 'error' ? null : { validation: 'You did not do that right' };
            await loadingResponse(options);
            form.reset();
          }
          catch(err) {
            // no-op
          }
        }}>
          <input name="answer"/>
          <button type="submit">
          Loads with validation error unless you enter "error"
          </button>
        </form>
        {showResponse}
      </div>
    );
  }
}

export default connect(
  state => ({ 
    response: state.response
  }),
  { loadingResponse }
)(Response);