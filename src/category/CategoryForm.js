import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
        <SubmitButton type="submit">{this.props.text}</SubmitButton>
        <ResetButton onClick={this.handleReset}>Reset</ResetButton>
      </form>
    );
  }
}

const Section = styled.section`
  background-color: #2eb82e;
  border: 1px solid black;
}
`;

const Label = styled.label`
  color: black;
  font-weight: bold;
  padding: 14px 20px;
  margin: 8px 0;
}
`;

const Input = styled.input`
  width: 30%;
  background-color: white;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border-radius: 10px;
  cursor: pointer;
}
`;

const SubmitButton = styled.button`
  background: black;
  color: white;
  border: 1px solid black;
  margin: 8px 0;
  height: ${props => props.dimension || 20}px;
  width: ${props => props.dimension || 50}px;

  &:hover {
    background-color: teal;
  }
`;

const ResetButton = styled.button`
  margin: 0 1em;
  background: white;
  color: black;
  border: 1px solid black;
  height: ${props => props.dimension || 20}px;
  width: ${props => props.dimension || 50}px;

  &:hover {
    background-color: teal;
  }
`;

