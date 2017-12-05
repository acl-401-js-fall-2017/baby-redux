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
      amount: expense.budget || '',
      category: this.props.id
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
    const { name, amount } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="columns">
          <div className="column is-third">
            Name: <input name="name" value={name} onChange={this.handleChange}/>
          </div>

          <div className="column is-third">
            Amount: <input name="amount" value={amount} onChange={this.handleChange}/>
          </div>
          <div className="column"><button type="submit">{this.props.text}</button></div>
        </div>
      </form>
    );
  }
}