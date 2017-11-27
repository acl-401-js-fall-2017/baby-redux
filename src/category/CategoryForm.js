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
      _id: category._id || null,
      timestamp: category.timestamp,
      name: category.name || null,
      budget: category.budget || null
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { _id, timestamp, name, budget } = this.state;
    this.props.onComplete({_id, timestamp, name, budget });
  }

  handleChange = ({ target: input }) => {
    this.setState({
      [input.name]: input.value
    });
  }
}