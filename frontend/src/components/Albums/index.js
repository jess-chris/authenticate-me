import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useLocation } from "react-router-dom";

import { fetchAlbums } from "../../store/albumReducer";
import { fetchImages } from "../../store/imageReducer";

import "./Albums.css";

function Albums({ sessionUser }) {

  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  
  useEffect(() => {
    
    dispatch(fetchAlbums(albums));
    
  }, [dispatch]);
  
  const albumsObject = useSelector((state) => state.albumState.entries);
  const albums = Object.values(albumsObject);


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