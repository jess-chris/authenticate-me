import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import './Navigation.css';
import { NavLink, useHistory } from 'react-router-dom';

function Navigation({ isLoaded }) {

  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState([]);

  const demoUser = (async (e) => {

    e.preventDefault();
    setErrors([]);
    await dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password' }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    history.push("/");

  });


  const sessionLinks = (
      <>
        <button onClick={demoUser} id='a-btn-link'>Demo</button>

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
        <div id='search-bar'>
          <span id='search-box'>
            <button><i className="fa-solid fa-magnifying-glass fa-1x"></i></button>
            <input type="search" size="140" placeholder="Photos, people, or groups"></input>
          </span>
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