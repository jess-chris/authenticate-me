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
      <NavLink to="/images/new"><i id="upload-btn" class="fa-solid fa-cloud-arrow-up fa-xl"></i></NavLink>
      <ProfileButton user={sessionUser} /> 
    </>
   );
  }

  return (
    <>
      <div id='main-nav-cont'>
        <NavLink exact to='/' id='nav-logo'>
          <img src='../../includes/flimg-logo.svg'></img>
        </NavLink>
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