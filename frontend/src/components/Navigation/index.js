import React, { useEffect } from 'react';
import { fetchImages } from '../../store/imageReducer';
import { useDispatch, useSelector } from 'react-redux';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation({ isLoaded }){

  const sessionLinks = (
      <>
        <NavLink to='/login' id='splash-login-btn'>Log in</NavLink>

        <NavLink to='/signup' id='a-btn-link'>Sign up</NavLink>
      </>
    );

  return (
    <>
      <div id='splash-nav-cont'>
        <NavLink exact to="/" id='nav-logo'>
          <img src='../../includes/flimg-logo.svg'></img>
        </NavLink>
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