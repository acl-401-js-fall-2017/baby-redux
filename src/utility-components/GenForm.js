import React, { PureComponent } from 'react';

export default class CategoryForm extends PureComponent {
  render() {
    const { name, value, onComplete, onDelete, buttonText } = this.props;
    return (
      <form
        onSubmit={onComplete}
      >
        <input type="text" name="name" placeholder={name}/>
        <input type="text" name="budget" placeholder={value}/>
        <input type="submit" value={buttonText}/>
        {onDelete && 
          <input type="button" value="delete" onClick={onDelete}/>
        }
      </form>
    );
  }
}