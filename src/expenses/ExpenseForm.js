import React, { PureComponent } from 'react';
import GenForm from '../utility-components/GenForm';

export default class ExpenseForm extends PureComponent {
  render() {
    const { onComplete, onDelete, buttonText } = this.props;
    return (
      <GenForm
        name="expense"
        value="value"
        onComplete={onComplete}
        onDelete={onDelete}
        buttonText={buttonText}
      />
    );
  }
}
