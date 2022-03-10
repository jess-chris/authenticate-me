import React, { useEffect } from 'react';
import './Navigation.css';

function Navigation({ isLoaded }){

  
  const sessionLinks = (
      <>
        <a href='/login' id='splash-login-btn'>Log in</a>

        <a href='/signup' id='a-btn-link'>Sign up</a>
      </>
    );

  return (
    <>
      <div id='splash-nav-cont'>
        <a href='/' id='nav-logo'>
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