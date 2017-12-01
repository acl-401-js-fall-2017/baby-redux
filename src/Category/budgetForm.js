import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class BudgetForm extends PureComponent {
    
    static propTypes = {
      budget: PropTypes.object,
      onComplete: PropTypes.func.isRequired
    }

    static defaultProps = {
      text: 'Add'
    }

    constructor(props) {
      super(props);
      const { budget = {} } = props;
      this.state = {
        name: budget.name,
        amount: budget.amount 
      };
    }

    handleSubmit = event => {
      event.preventDefault();
      const { name, amount } = this.state;
      this.props.onComplete({ name, amount });
    }

    handleChange = ({ target: input }) => {
      this.setState({
        [input.name]: input.value
      });
    }

    render() {
      const{ name, amount } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <div>
              Name: <input name="name" value={name} onChange={this.handleChange} required/>
          </div>
          <div>
              Amount: <input name="amount" value={amount} onChange={this.handleChange} required/>
          </div>
          <button type="submit">{this.props.text}</button>
        </form>
      );
    }
}