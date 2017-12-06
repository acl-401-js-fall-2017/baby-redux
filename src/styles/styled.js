import styled from 'styled-components';


export const StyledButton = styled.button`
border-radius: 3px;
padding: 0.25em 1em;
margin: 0 1em;
background: transparent;
color: black;
border: 1px solid black;
cursor: pointer;

    &:hover.removebtn {
        background: red;
        color: black;
    }
    &:hover.expensebtn {
        background: rgb(77, 160, 77);
        color: white;
    }
`;

export const StyledFormDiv = styled.div`
display: flex;
justify-content: center;
    &:hover ${StyledButton} {
        background: rgba(201, 199, 197, 0.8);
        color: white;
    }
 div {
   padding: 5px;
 }
`;