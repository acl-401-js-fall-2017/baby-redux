import React, { PureComponent } from 'react';

export default class ExpenseForm extends PureComponent {

    render(){
        const { onComplete, buttonValue } = this.props;
        return (
          <form onSubmit={onComplete}>
            <input type="submit" value={buttonValue}/>
            <input type="text" name="name" placeholder="title"/>
            <input type="text" name="expense" placeholder="amount"/>
          </form>
        );
    }
}
