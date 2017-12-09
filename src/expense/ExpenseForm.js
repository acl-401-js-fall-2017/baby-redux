import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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
}