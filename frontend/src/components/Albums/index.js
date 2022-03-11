import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { fetchAlbums } from "../../store/albumReducer";
import { fetchImages } from "../../store/imageReducer";

function Albums() {
  const dispatch = useDispatch();

  const albumsObject = useSelector((state) => state.albumState.entries);
  const albums = Object.values(albumsObject);

  useEffect(() => {

    dispatch(fetchAlbums());

  }, [dispatch]);

  return(
    <ul>
      {albums.map(({ id, userId, title}) => (
        <li key={id}>
          <NavLink to={{pathname: `/albums/${id}`, state:{id, userId, title}}}>
            <p>{title}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  )
}


export default Albums;