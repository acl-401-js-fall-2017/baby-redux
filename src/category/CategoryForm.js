import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledButton, FormStyled } from '../styles/styled';

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
      };
    }

    handleSubmit = event => {
      event.preventDefault();
      const form = event.target;
      const { _id, name, budget } = this.state;
      this.props.onComplete({
        _id,
        name,
        budget
      });
      form.reset();
    }

    handleChange = ({ target: input }) => {
      this.setState({
        [input.name]: input.value
      });
    }

    render() {
      const { name, budget } = this.props;

      return (

        <div>
          <FormStyled onSubmit={this.handleSubmit}>
            <div>
              <div>
            Name: <input name="name" value={name} onChange={this.handleChange} required/>
              </div>
              <div>
            Budget: <input name="budget" value={budget} onChange={this.handleChange} required/>
              </div>
              <StyledButton className="propsbtn" type="submit">{this.props.text}</StyledButton>
            </div>
          </FormStyled>
        </div>
      );
    }
}