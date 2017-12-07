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

export const RemoveButton = styled.button`
  background: white;
  color: red;
  border: 1px solid black;
  margin: 8px 0;
  height: ${props => props.dimension || 30}px;
  width: ${props => props.dimension || 60}px;

  &:hover {
    background-color: #ffb3b3;
  }
  `;

export const ModifyButton = styled.button`
  background: white;
  color: black;
  border: 1px solid black;
  margin: 0 1em;
  height: ${props => props.dimension || 30}px;
  width: ${props => props.dimension || 60}px;

  &:hover {
  background-color: #f4ea7b;
  color: black;
  }
`;

export const SubmitButton = styled.button`
  background: black;
  color: white;
  border: 1px solid black;
  margin: 8px 0;
  height: ${props => props.dimension || 20}px;
  width: ${props => props.dimension || 50}px;

  &:hover {
    background-color: #d6f5d6;
    color: black;
  }
`;

export const ResetButton = styled.button`
  background: white;
  color: black;
  border: 1px solid black;
  margin: 0 1em;
  height: ${props => props.dimension || 20}px;
  width: ${props => props.dimension || 50}px;

  &:hover {
    background-color: #f4ea7b;
  }
`;


