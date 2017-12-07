import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Section, Label, Input, Button } from '../styles/style';

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
      id: category._id ||'',
      timestamp: category.timestamp,
      name: category.name || '',
      budget: category.budget || '',
      expense: category.expense
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { id, timestamp, name, budget } = this.state;
    this.props.onComplete({ _id: id, timestamp, name, budget });
    event.target.reset();
  }   

  handleChange = ({ target: input }) => {
    this.setState({
      [input.name]: input.value  // get the result of what is in the brackets and use that as the key
    });
  }

  handleReset = () => {
    const { category = {} } = this.props;
    this.setState({
      id: category._id || null,
      timestamp: category.timestamp,
      name: category.name,
      budget: category.budget
    });
  }
  

  render() {
    const { name, budget } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Section>
          <Label>Name:</Label>
          <Input name="name" value={name} placeholder="Name for Budget Category" onChange={this.handleChange}/>
          <Label>Budget: </Label>
          <Input name="budget" value={budget} placeholder="Dollar Amount" onChange={this.handleChange}/>
        </Section>
        <Button className="submit" type="submit">{this.props.text}</Button>
        <Button className="reset" onClick={this.handleReset}>Reset</Button>
      </form>
    );
  }
}

