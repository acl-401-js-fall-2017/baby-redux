import React, { PureComponent } from 'react';

export default class ExpenseForm extends PureComponent {

  static defaultProps = {
    text: 'Add'
  }

  constructor(props) {
    super(props);
    const { expense = {} } = props;
    this.state = {
      name: expense.name || '',
      amount: expense.amount || '',
      category: this.props.id,
      _id: expense._id || '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { name, amount, _id } = this.state;
    this.props.onComplete({ name, amount, _id });
  }

  handleChange = ({ target: input }) => {
    this.setState({
      [input.name]: input.value
    });
  }

  render() {
    const { name, amount } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="columns">
          <div className="column is-third">
            <input name="name" value={name} placeholder={'Name'} onChange={this.handleChange}/>
          </div>

          <div className="column is-third">
            <input name="amount" value={amount} placeholder={'Amount'} onChange={this.handleChange}/>
          </div>
          <div className="column"><button type="submit">{this.props.text}</button></div>
        </div>
      </form>
    );
  }
}