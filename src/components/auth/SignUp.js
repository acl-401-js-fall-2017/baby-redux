import React, { PureComponent } from 'react';

export default class SignUp extends PureComponent {
  render() {
    return(
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>        
      </form>            
    );
  }
}