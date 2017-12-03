import React, { PureComponent } from 'react';
import GenForm from '../utility-components/GenForm';

export default class CategoryForm extends PureComponent {
  render() {
    const { onComplete, onDelete, buttonText, editing } = this.props;
    return (
      <GenForm
        name="category"
        value="budget"
        onComplete={onComplete}
        onDelete={onDelete}
        buttonText={buttonText}
        editing={editing}
      />
    );
  }
}
