import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class BudgetForm extends PureComponent {

    static PropTypes = {
      budget: PropTypes.object,
      onComplete: PropTypes.func.isRequired
    }
    
    static defaultProps = {
      budget: {},
      text: 'Add'
    }

    constructor(props) {
      super(props);
      const { budget } = props;
      this.state = {
        name: budget.name || '',
        amount: budget.amount || ''
      };
    }

    handleSubmit = async event => {
      event.preventDefault();
      try {
        const { _id } = this.props.budget;
        const { name, amount } = this.state;
        this.props.onComplete({ _id, name, amount });
        if(this.props.isAdd === true){ this.setState({ name:'', amount:'' });}
      }
      catch(err) {
        // no-op
      }
    }

    handleChange = async ({ target: input }) => {
      this.setState({
        [input.name]: input.value
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