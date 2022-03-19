import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

import { fetchAlbums } from "../../store/albumReducer";

import "./Albums.css";

function Albums({ sessionUser }) {


  const dispatch = useDispatch();
  const history = useHistory();

  if(!sessionUser) history.push("/");
  
  const albumsObject = useSelector((state) => state.albumState.entries);
  const albums = Object.values(albumsObject);
  useEffect(() => {
    
    dispatch(fetchAlbums(albums));
    
  }, [dispatch]);
  


  return(
    <ul id="album-cont">
      {albums.map(({ id, userId, title}) => (
        <li className="single-album" key={`album${id}`}>
          <NavLink to={{pathname: `/albums/${id}`, state:{id, userId, title}}}>
            <p id="album-title">{title}</p>
            <i id="album-folder" className="fa-solid fa-images fa-5x"></i>
          </NavLink>
        </li>
      ))}
    </ul>
  )
}


export default Albums;