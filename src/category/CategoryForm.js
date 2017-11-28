import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CategoryForm extends PureComponent {

    static propTypes = {
      category: PropTypes.object,
      onComplete: PropTypes.func.isRequired
    }

    static defaultProps = {
      text: 'Add'
    }

    constructor(props) {
      super(props);
      const { category = {} } = props;
      this.state = {
        name: category.name || null,
        budget: category.budget || null,
        _id: category._id || null,
        timestamp: category.timestamp
      };
    }

    handleSubmit = event => {
      event.preventDefault();
      const { _id, timestamp, name, budget } = this.state;
      this.props.onComplete({
        _id,
        timestamp,
        name,
        budget
      });
    }

    handleChange = ({ target: input }) => {
      this.setState({
        [input.name]: input.value
      });
    }

    render() {
      const { name, budget } = this.props;

      return (
        <form onSubmit={this.handleSubmit}>
          <div>
            Name: <input name="name" value={name} onChange={this.handleChange}/>
          </div>
          <div>
            Budget: <input name="budget" value={budget} onChange={this.handleChange}/>
          </div>
          <button type="submit">{this.props.text}</button>

        </form>
      );
    }
}