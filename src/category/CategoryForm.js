import React, { PureComponent } from 'react';
export default class CategoryForm extends PureComponent {

  static defaultProps = {
    text: 'Add'
  }

  constructor(props) {
    super(props);
    const { category = {} } = props;
    this.state = {
      name: category.name || '',
      budget: category.budget || 0,
      _id: category._id || null,
      timestamp: category.timestamp
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { _id, timestamp, name, budget } = this.state;
    this.props.onComplete({ _id, timestamp, name, budget });
  }

  handleChange = ({ target: input }) => {
    this.setState({
      [input.name]: input.value
    });
  }

  render() {
    const { name, budget } = this.state;
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          Name: <input name="name" value={name} onChange={this.handleChange}/>
          Budget: <input budget="budget" type="number" defaultValue={budget} onChange={this.handleChange}/>
          <button type="submit">{this.props.text}</button>
        </div>
      </form>
    );
  }
}