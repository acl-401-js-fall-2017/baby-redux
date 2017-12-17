import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signout } from '../auth/actions';
import { NavListStyled, NavItemStyled } from '../styles/styled';


const NavLink = props => <Link style={{ color: 'steelblue' }} {...props}/>;

function Nav({ user, signout }) {
  return (
    <nav>
      <NavListStyled>
        <NavItemStyled><NavLink to="/">Home</NavLink></NavItemStyled>
        <NavItemStyled><NavLink to="/categories">Budget Categories</NavLink></NavItemStyled>
        <NavItemStyled>
          { user 
            ? <NavLink to="/" onClick={signout}>Logout</NavLink>
            : <NavLink to="/auth/signin">Login</NavLink>
          }
        </NavItemStyled>
      </NavListStyled>
    </nav>
  );
}

export default connect(
  state => ({ user: state.auth.user }),
  { signout }
)(Nav);