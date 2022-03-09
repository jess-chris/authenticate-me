import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from '../Navigation/ProfileButton';
import './NavBar.css';

function NavBar({ sessionUser }) {

  let sessionLinks; 
  
  if(sessionUser) {
   sessionLinks = (
    <>
      <button><NavLink to="/images/new">Upload</NavLink></button>
      <ProfileButton user={sessionUser} /> 
    </>
   );
  }

  return (
    <>
      <div id='main-nav-cont'>
        <a href='/'>
          <img src='../../includes/flimg-logo.svg'></img>
        </a>
        {sessionUser && (
          <div id='search-bar'>
            <input type="search"></input>
            <button>Search</button>
          </div>
        )}
        <div id="nav-bar">
          <ul>
            <li>
              {sessionLinks && sessionLinks}
            </li>
          </ul>
        </div>
      </div>  
    </>
  );


};


export default NavBar;