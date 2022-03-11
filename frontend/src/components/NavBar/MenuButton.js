import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function MenuButton() {

  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);




  return (
    <>
      <div id="dropdown">
        <button onClick={openMenu}>
          <i id="menu-btn" className="fa-solid fa-ellipsis fa-2xl" />
        </button>
        {showMenu && (
          <ul className="menu-dropdown">
            <li><NavLink to="/"><button>Photos</button></NavLink></li>
            <li><NavLink to="/albums"><button>Albums</button></NavLink></li>
          </ul>
        )}
      </div>
    </>
  );
};

export default MenuButton;