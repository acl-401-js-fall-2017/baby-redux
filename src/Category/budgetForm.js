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
        category: budget.category || null,
        _id: budget._id || null,
        timestamp: budget.timestamp
      };
    }

    handleSubmit = event => {
      event.preventDefault();
      const { _id, timestamp, name, category } = this.state;
      this.props.onComplete({ _id, timestamp, name, category });
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