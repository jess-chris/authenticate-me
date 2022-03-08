import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){

  
  const sessionLinks = (
      <>
        <LoginFormModal />
        <button>
        <NavLink to="/signup">Sign Up</NavLink>
        </button>
      </>
    );

  return (
    <>
      <div id='splash-nav-cont'>
        <a href='/'>
          <img src='../../includes/flimg-logo.svg'></img>
        </a>
        <div id='splash-search-bar'>
          <input type="search"></input>
          <button>Search</button>
        </div>
        <div id="splash-nav-bar">
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