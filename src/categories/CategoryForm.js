import React, { PureComponent } from 'react';

export default class CategoryForm extends PureComponent {
  render() {
    const { onComplete, buttonText } = this.props;
    return (
      <form
        onSubmit={onComplete}
      >
        <input type="text" name="name" placeholder="category"/>
        <input type="text" name="budget" placeholder="budget"/>
        <input type="submit" value={buttonText}/>
      </form>
    );
  }
}