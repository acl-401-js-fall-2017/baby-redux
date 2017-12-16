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
        color: white;
    }
    &:hover.expensebtn {
        background: rgb(77, 160, 77);
        color: white;
    }
    &:hover.propsbtn {
        background: rgba(201, 199, 197, 0.8);
        color: white;
    }
`;


export const FormStyled = styled.form`
display:flex;
justify-content: center;
 
  div {
    display: flex;
    justify-content: center;
    padding: 0.1em;
  }
`;


export const ContainerDiv = styled.div`
text-align: center;
background: grey;
display: flex;
justify-content: center;
`;

export const ErrorStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0; right: 0;
  color: red;
  margin: 20px;
  font-family: monospace;
  font-size: 20px;
  font-weight: bold;
`;

export const LoadingStyled = styled.div`
    color: rgb(122, 0, 128);
  position: absolute;
  top: 0; bottom: 0;
  left: 0; right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: App-logo-spin infinite 1s linear;
`;

export const HeaderStyled = styled.header`
  background-color: #222;
  height: 50px;
  padding: 20px;
  color: white;
   h1 {
    font-size: 1.5em;
    text-align: center;
   }
`;


// ### Nav Styling #### //

export const NavListStyled = styled.ul`
margin: 0;
padding: 0;
`;

export const NavItemStyled = styled.li`
display: inline-block;
list-style-type: none;
margin: 10px;
`;


// ### Credential Styling ### //
export const Form = styled.form`
  text-align: center;
  label {
    display: block;
  }
  label, button {
    padding: 5px;
  }
`;

// ### Auth Styling ### //
export const CenteredDiv = styled.div`
  text-align: center;
`;

export const AuthError = styled.pre`
  color: red;
`;