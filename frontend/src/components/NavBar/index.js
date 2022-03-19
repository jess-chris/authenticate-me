import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from '../Navigation/ProfileButton';
import './NavBar.css';
import MenuButton from './MenuButton';

function NavBar({ sessionUser }) {

  let sessionLinks; 
  
  if(sessionUser) {
   sessionLinks = (
    <>
      <MenuButton />
      <NavLink to="/images/new"><i id="upload-btn" className="fa-solid fa-cloud-arrow-up fa-xl"></i></NavLink>
      <NavLink to="/albums/new"><i id="album-btn" className="fa-solid fa-images fa-xl"></i></NavLink>
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
              <span id='search-box'>
                <button><i className="fa-solid fa-magnifying-glass fa-1x"></i></button>
                <input type="search" size="140" placeholder="Photos, people, or groups"></input>
              </span>
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