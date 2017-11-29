import React, { Component } from 'react';
import shortid from 'shortid';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      _id: shortid.generate(),
      timestamp: new Date(),
      name: '',
      budget: null
    };
  }
  render() {
    return(
      <p>filler</p>
    );
  }
}

export default Category;