import React, { PureComponent } from 'react';

export default class ExpenseForm extends PureComponent {

    render(){
        const { onComplete, buttonValue, category } = this.props;
        return (
          <form data-value={category && category._id} onSubmit={onComplete}>
            <input type="submit" value={buttonValue}/>
            <input type="text" name="name" placeholder="Expense Name"/>
            <input type="text" name="expense" placeholder="Amount"/>
          </form>
        );
    }
}
