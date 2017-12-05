import React, { PureComponent } from 'react';
import 'bulma/css/bulma.css';

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
        <form className="field is-grouped is-centered" onSubmit={this.handleSubmit}>
          <div className="control">
            <input className="input is-primary" placeholder="Name" name="name" value={name} onChange={this.handleChange} required/>
          </div>
          <div className="control">
            <input className="input  is-primary" placeholder="Amount" name="amount" value={amount} onChange={this.handleChange} required/>
          </div>
          <div className="control">
            <button className="button is-info" type="submit">{this.props.text}</button>
          </div>
        </form>
      );
    }
}
