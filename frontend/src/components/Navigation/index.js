import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <>
      <div id='nav-cont'>
        <a href='/'>
          <img src='https://identity.flickr.com/img/flickr_logo_dots.3c6f3e13.svg'></img>
        </a>
        <div id="nav-bar">
          <ul>
            <li>
              <NavLink exact to="/">Home</NavLink>
              {isLoaded && sessionLinks}
            </li>
          </ul>
        </div>
      </div>  
    </>
  );
}

export default Navigation;