import React from 'react';
import { Form } from '../styles/styled';

export default ({ submit, action, allowName = false }) => (
  <Form onSubmit={event => {
    event.preventDefault();
    const { elements } = event.target;
    const data = Object.keys(elements).reduce((obj, key) => {
      obj[key] = elements[key].value;
      return obj;
    }, {});
    submit(data);
  }}>
    { allowName && <label>name: <input name="name"/></label>}
    <label>email: <input name="email"/></label>
    <label>password: <input type="password" name="password"/></label>
    <button>{action}</button>
  </Form>
);