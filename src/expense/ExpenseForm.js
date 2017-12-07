import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { SubmitButton } from  '../styles/style';

export default class ExpenseForm extends PureComponent {

  static propTypes = {
    expense: PropTypes.object,
    onComplete: PropTypes.func.isRequired
  }

  static defaultProps = {
    text: 'Add'
  }

  constructor(props) {
    super(props);
    const { expense = {} } = props;
    this.state = {
      expense: expense.expense || '',
      amount: expense.amount || '',
      id: expense._id || '',
      category: this.props.id
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { expense, amount, id } = this.state;
    this.props.onComplete({ _id: expense, amount, id });
    event.target.reset();
  }

  handleChange = ({ target: input }) => {
    this.setState({
      [input.expense]: input.value
    });
  }

  render(){
    const { expense, amount } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Expense Name:</label>
          <input name="expense" value={expense} placeholder="Type of Expense" onChange={this.handleChange}/>
          <label>Amount:</label>
          <input name="amount" value={amount} placeholder="Amount Expensed" onChange={this.handleChange}/>>
        </div>
        <SubmitButton type="submit">{this.props.text}</SubmitButton>
      </form>
    );
  }
}