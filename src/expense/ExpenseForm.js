import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledButton, FormStyled } from '../styles/styled';

export default class ExpenseForm extends PureComponent {
    static propTypes = {
      expense: PropTypes.object,
    }

    static defaultProps = {
      text: 'Add'
    }

    constructor(props) {
      super(props);
      const { expense = {} } = props;

      this.state = {
        name: expense.name || null,
        cost: expense.cost || null,
        category: this.props.categoryId || null,
        expense: expense._id || null
      };
    }

    handleSubmit = event => {
      event.preventDefault();
      const form = event.target;
      const { category, expense, name, cost } = this.state;

      if(this.props.addExpense) {
        this.props.addExpense(category, {
          category,
          name,
          cost
        });
      }
      if(this.props.updateExpense) {
        this.props.updateExpense(category, expense, {
          name,
          cost
        });
      }
      form.reset();
    }

    handleChange = ({ target: input }) => {
      this.setState({
        [input.name]: input.value
      });
    }

    render() {
      const { name, cost } = this.props;

      return (
        <div>
          <FormStyled onSubmit={this.handleSubmit}>
            <div>
              <div>
            Name: <input name="name" value={name} onChange={this.handleChange} required/>
              </div>
              <div>
            Cost: <input name="cost" value={cost} onChange={this.handleChange} required/>
              </div>
              <StyledButton className="addbtn" type="submit">{this.props.text}</StyledButton>
            </div>
          </FormStyled>
        </div>
      );
    }
}