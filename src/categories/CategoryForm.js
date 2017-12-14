import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from './component-library';

export default class CategoryForm extends Component {

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
      name: category.name || '',
      budget: category.budget || ''
    };
  }

  componentWillMount() {
    console.log('onFormPage', this.props.id);
    const { name, budget } = this.props;
    this.setState({ name, budget });
  } 


  handleSubmit = event => {
    event.preventDefault();
    const { id, editing } = this.props;
    console.log('in handleSubmit', id);
    const { name, budget } = this.state;
    this.props.onComplete({ id, name, budget, editing });
    // event.target.reset();
    this.setState({
      name: '',
      budget: ''
    });
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    const styledButton = Button(this.props.text, 'submit');
    const { name, budget } = this.state;
    const { editing } = this.props;
    return(
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Fieldset text={this.props.text}>
            <legend>{this.props.text} a Category</legend>
            <div>
              <label>Name:&nbsp;</label>
              <Input name="name" value={name} onChange={this.handleChange}/>
              <label>Budget:&nbsp;</label>
              <Input name="budget" value={budget} onChange={this.handleChange}/>
              {styledButton}
            </div>
          </Fieldset>
        </Form>
      </div>
    );
  }
}

const Form = styled.form`
  background-color: white;
  padding: 30px;
  margin: 30px;
  `;

const Fieldset = styled.fieldset`
  padding: 20px;
  color: ${props => props.text === 'Add' ? 'rgb(156, 23, 156)' : 'rgb(255, 50, 50)'}
  `;

const Input = styled.input`
  margin-right: 30px;
  color: blue;
`;

  