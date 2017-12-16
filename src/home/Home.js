import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const GetStarted = () => (
  <p>
    <Link to ="/auth/sigin">Sign In </Link>
    {'or'}
    <Link to="/auth/signup">Sign up </Link>
  </p>
);

const WelcomeGreeting = ({ name }) => (
  <p>Welcome {name}! <Link to="/categories"> View your categories </Link>.</p>
);

function Home({ user }) {

  return (
    <div>
      <h1>Welcome to Budget Tracker</h1>
      { user ? <WelcomeGreeting name={user.name}/> : <GetStarted/>}
    </div>
  );
}



export default connect(
  state => ({ user: state.auth.user }),
  null
)(Home);