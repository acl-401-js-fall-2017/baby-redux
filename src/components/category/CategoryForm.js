import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CategoryForm extends PureComponent {

    static PropTypes = {
      category: PropTypes.object,
      onComplete: PropTypes.func.isRequired
    }
    
    static defaultProps = {
      category: {},
      text: 'Add'
    }

    constructor(props) {
      super(props);
      const { category } = props;
      this.state = {
        name: category.name || '',
        amount: category.amount || ''
      };
    }

    handleSubmit = async event => {
      event.preventDefault();
      try {
        const { _id } = this.props.category;
        const { name, amount } = this.state;
        this.props.onComplete({ _id, name, amount });
        if(this.props.isAdd === true){ this.setState({ name:'', amount:'' });}
      }
      catch(err) {
        // no-op
      }
    }

    handleChange = async (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    }

    render() {
      const { name, amount } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <div>
            Name: <input name="name" value={name} onChange={this.handleChange}/>
          </div>   
          <div>
            Amount: <input name="amount" value={amount} onChange={this.handleChange} />
          </div> 
          <button type="submit">{this.props.text}</button>    
        </form>
      );
    }
}