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
      const { categoryId } = props;
      console.log('expenseForm',categoryId);
      this.state = {
        name: expense.name || null,
        cost: expense.cost || null,
        category: this.props.categoryId || null
      };
    }

    handleSubmit = event => {
      event.preventDefault();
      //   const form = event.target;
      const { category, name, cost } = this.state;
      this.props.onComplete(category,{
        category,
        name,
        cost
      });
    //   form.rest();
    }

    handleChange = ({ target: input }) => {
      this.setState({
        [input.name]: input.value
      });
    }

    render() {
      const { name, cost } = this.props;

      return (
        <form onSubmit={this.handleSubmit}>
          <div>
            Name: <input name="name" value={name} onChange={this.handleChange} required/>
          </div>
          <div>
            Cost: <input name="cost" value={cost} onChange={this.handleChange} required/>
          </div>
          <button type="submit">{this.props.text}</button>
        </form>
      );
    }
}