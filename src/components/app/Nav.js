import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

const NavList = styled.ul`
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  display: inline-block;
  list-style-type: none;
  margin: 10px;
`;

const NavLink = props => <Link style={{ color: 'green' }} {...props}/>;

const Nav = ({ user, signout }) => {
  return (
    <nav>
      <NavList>
        <NavItem><NavLink to="/">Home</NavLink></NavItem>  
        <NavItem><NavLink to="/categories">Categories</NavLink></NavItem>  
        <NavItem>
          { user 
            ? <NavLink to="/" onClick={() => {}}>Log Out</NavLink>
            : <NavLink to="/signin">Login</NavLink>
          }
        </NavItem>  
      </NavList>
    </nav>    
  );
};

export default connect(
  state => ({ user: {} }),
)(Nav);