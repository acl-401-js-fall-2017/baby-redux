import React, { PureComponent } from 'react';
import GenForm from '../utility-components/GenForm';

export default class CategoryForm extends PureComponent {
  render() {
    const { onComplete, onDelete, buttonText } = this.props;
    return (
      <GenForm
        name="category"
        value="budget"
        onComplete={onComplete}
        onDelete={onDelete}
        buttonText={buttonText}
      />
    );
  }
}
{/* <form
  onSubmit={onComplete}
>
  <input type="text" name="name" placeholder="category"/>
  <input type="text" name="budget" placeholder="budget"/>
  <input type="submit" value={buttonText}/>
</form> */}