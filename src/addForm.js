import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class AddForm extends PureComponent {
    
    static propTypes = {
      expense: PropTypes.object,
      category: PropTypes.string,
      onComplete: PropTypes.func.isRequired
    }

    static defaultProps = {
      text: 'Add'
    }

    constructor(props) {
      super(props);
      const { expense = {} } = props;
      this.state = {
        name: expense.name,
        amount: expense.amount, 
        _id:expense._id
      };
    }

    handleSubmit = event => {
      event.preventDefault();
      const { name, amount, _id } = this.state;
      const { category } = this.props;
      this.props.onComplete({ name, amount, _id, category });
      event.target.reset();
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
              Amount: <input  name="amount" value={amount} onChange={this.handleChange} required/>
          </div>
          <button type="submit">{this.props.text}</button>
        </form>
      );
    }
}