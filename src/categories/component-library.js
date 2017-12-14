import styled from 'styled-components';
import React from 'react';

export function Button(text, type, onClick=null) {
  const Button = styled.button`
    padding: 5px;
    font-size: 1.2 em;
    font-weight: bold;
    color: green;

    &:hover {
      color:red;
    }
    `;
  return (
    <Button type={type} onClick={onClick}>{text}</Button>
  );
}