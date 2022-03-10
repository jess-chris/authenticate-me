import React, { useEffect } from 'react';
import { fetchImages } from '../../store/imageReducer';
import { useDispatch, useSelector } from 'react-redux';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation({ isLoaded }){


  // useEffect(() => {

  //   (function loop(){
  //     setTimeout(function() {
  //       const splashCont = document.querySelector('.splash-cont');

  //       const arr = [
  //         'https://cdn.pixabay.com/photo/2020/06/01/22/23/eyes-5248678_960_720.jpg',
  //         'https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_960_720.jpg',
  //         'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_960_720.jpg'
  //       ]
    
  //       splashCont.style.backgroundImage = `url('${arr[Math.floor(Math.random() * arr.length - 1)]}')`;
   
  //        loop();
  //    }, 4000);
  //  })();
  // }, []);
  
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