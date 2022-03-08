import React, { useEffect } from 'react';
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
        {/* <NavLink to="/signup">Sign Up</NavLink> */}
        <button>
        <NavLink to="/signup">Sign Up</NavLink>
        </button>
      </>
    );
  }

  return (
    <>
      <div id='nav-cont'>
        <a href='/'>
          <img src='../../includes/flimg-logo.svg'></img>
        </a>
        <div id='search-bar'>
          <input type="search"></input>
          <button>Search</button>
        </div>
        <div id="nav-bar">
          <ul>
            <li>
              {isLoaded && sessionLinks}
            </li>
          </ul>
        </div>
      </div>  
    </>
  );
}

export default Navigation;