import React, { PureComponent } from 'react';

export default class CategoryForm extends PureComponent {
  constructor() {
    super();
    this.state = {
      collapsed: true 
    };
  }

  editViewHandler = () => this.setState({ collapsed: !this.state.collapsed });

  render() {
    const { name, value, onComplete, onDelete, buttonText, editing = 'edit' } = this.props;
    const { collapsed } = this.state;
    return (
      <div>
        { collapsed &&
          <input type='button' value={editing} onClick={this.editViewHandler}/>
        }
        { !collapsed &&
          <form
            onSubmit={onComplete}
          >
            <input type="text" name="name" placeholder={name}/>
            <input type="text" name="budget" placeholder={value}/>
            <input type="submit" value={buttonText}/>
            {onDelete && 
              <input type="button" value="delete" onClick={onDelete}/>
            }
            <input type="button" value="close" onClick={this.editViewHandler}/>
          </form>
        }
      </div>
    );
  }
}