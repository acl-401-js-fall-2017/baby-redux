import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ExpenseForm extends PureComponent {

    static PropTypes = {
      expense: PropTypes.object,
      onComplete: PropTypes.func.isRequired
    }
    
    static defaultProps = {
      expense: {},
      text: 'Add'
    }

    constructor(props) {
      super(props);
      const { expense } = props;
      this.state = {
        name: expense.name || '',
        amount: expense.amount || ''
      };
    }

    handleSubmit = async event => {
      event.preventDefault();
      try {
        const { _id } = this.props.expense;
        const { name, amount } = this.state;
        this.props.onComplete({ _id, name, amount });
        if(this.props.isAdd === true){ this.setState({ name:'', amount:'' });}
      }
      catch(err) {
        // no-op
      }
    }

  handleChange = async (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { name, amount } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
              Name: <input name="name" value={name} onChange={this.handleChange}/>
        </div>   
        <div>
              Amount: <input name="amount" value={amount} onChange={this.handleChange} />
        </div> 
        <button type="submit">{this.props.text}</button>    
      </form>
    );
  }
}