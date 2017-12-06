import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      budget: category.budget || '',
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
    event.target.reset();
    this.setState({
      name: '',
      budget: ''
    });
  }

  handleChange = ({ target: input }) => {
    this.setState({
      [input.name]: input.value
    });
  }

  render() {
    const { name, budget } = this.state;
    const { editing } = this.props;
    return(
      <div>
        <form  className="form" onSubmit={this.handleSubmit}>
          <fieldset className={this.props.text}>
            <legend>{this.props.text} a Category</legend>
            <div>
              <label>Name:&nbsp;</label>
              <input name="name" className="input" value={name} onChange={this.handleChange}/>
              <label>Budget:&nbsp;</label>
              <input name="budget" className="input" value={budget} onChange={this.handleChange}/>
              <button className="button" type="submit">{this.props.text}</button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}