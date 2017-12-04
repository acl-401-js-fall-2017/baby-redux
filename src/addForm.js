import React, { PureComponent } from 'react';

export default class AddForm extends PureComponent {
    
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
      this.setState({ name:'', amount:'' });
    }

    handleChange = ({ target }) => {
      this.setState({
        [target.name]: target.value
      });
    }

    render() {
      const{ name, amount } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Name" name="name" value={name} onChange={this.handleChange} required/>
          <input placeholder="Amount" name="amount" value={amount} onChange={this.handleChange} required/>
          <button className="btn-submit" type="submit">{this.props.text}</button>
        </form>
      );
    }
}
