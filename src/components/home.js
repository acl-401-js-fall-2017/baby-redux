import React from 'react';
import Category from '../categories/category';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const GetStarted = () => (
  <p>
    <Link to="/auth/signin">Sign in</Link>
    {' or '} 
    <Link to="/auth/signup">Sign up</Link>
    {' to get started.'}
  </p>
);

const WelcomeGreeting = ({ name }) => (
  <p>Welcome {name}! <Link to="/categories">View your categories</Link>.</p>
);

function Home({ user }) {
  return (
    <div>
      <div>
        { user ? <WelcomeGreeting name={user.name}/> : <GetStarted/> }
      </div>
      <section className="hero is-light">
        <div className="hero-body">
          <div className="container is-fluid">
            <h3> Home!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Quam elementum pulvinar etiam non quam. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Ullamcorper a lacus
            vestibulum sed arcu non odio euismod. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. In hendrerit
            gravida rutrum quisque. In nulla posuere sollicitudin aliquam ultrices sagittis orci. Arcu risus quis varius quam quisque id diam.
            Sit amet venenatis urna cursus eget nunc scelerisque.
              <br/>
              <br/>
            Fermentum et sollicitudin ac orci phasellus egestas tellus. Bibendum neque
            egestas congue quisque egestas diam in arcu. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Turpis egestas maecenas
            pharetra convallis posuere morbi leo. At urna condimentum mattis pellentesque id. Tortor dignissim convallis aenean et. Semper auctor neque
            vitae tempus quam pellentesque nec nam. Faucibus et molestie ac feugiat sed lectus vestibulum. Hac habitasse platea dictumst vestibulum
            rhoncus est pellentesque elit ullamcorper. Tortor condimentum lacinia quis vel eros.</p>
          </div>
        </div>
      </section>
      <section className="section">
        {user && <Category/>}
      </section>
    </div>
  );
}

export default connect(
  state => ({ user: state.auth.user }),
  null
)(Home);