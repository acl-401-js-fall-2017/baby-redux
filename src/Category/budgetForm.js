import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class BudgetForm extends PureComponent {
    
    static propTypes = {
      budget: PropTypes.object,
      onComplete: PropTypes.func.isRequired
    }

    static defaultProps = {
      text: 'Add'
    }

    constructor(props) {
      super(props);
      const { budget = {} } = props;
      this.state = {
        name: budget.name || null,
        category: budget.category || null
      };
    }

    handleSubmit = event => {
      event.preventDefault();
      const {  name, category } = this.state;
      this.props.onComplete({ name, category });
    }

    handleChange = ({ target: input }) => {
      this.setState({
        [input.name]: input.value
      });
    }

    render() {
      const{ name, category } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <div>
              Name: <input name="name" value={name} onChange={this.handleChange}/>
          </div>
          <div>
              Category: <input name="category" value={category} onChange={this.handleChange}/>
          </div>
          <button type="submit">{this.props.text}</button>
        </form>
      );
    }
}