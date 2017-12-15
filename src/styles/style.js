import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const Section = styled.section`
background-color: #2eb82e;
border: 1px solid black;
`;

export const Label = styled.label`
color: black;
font-weight: bold;
padding: 14px 20px;
margin: 8px 0;
`;

export const Input = styled.input`
width: 30%;
background-color: white;
color: #595959;
padding: 14px 20px;
margin: 8px 0;
border-radius: 10px;
`;

export const Button = styled.button`
  background: white;
  color: black;
  border: 1px solid black;
  margin: 0 1em;
  height: ${props => props.dimension || 30}px;
  width: ${props => props.dimension || 60}px;

  &:hover {
    background-color: #cbcbc8;
  }
  `;

export const Link = styled.link`
  background: white;
  color: black;
  border: 1px solid black;
  margin: 0 1em;
  height: ${props => props.dimension || 30}px;
  width: ${props => props.dimension || 60}px;

  &:hover {
    background-color: #cbcbc8;
  }
  `;

