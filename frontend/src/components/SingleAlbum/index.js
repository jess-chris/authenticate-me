import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useHistory, NavLink } from 'react-router-dom';
import { fetchAlbum, deleteAlbum } from '../../store/albumReducer';

import "./SingleAlbum.css";

const SingleAlbum = ({ sessionUser }) => {

  const [albumImages, setAlbumImages] = useState({});

  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(async () => {
    setAlbumImages(await fetchAlbum(location.state.id));
  }, []);

  const handleDelete = (e) => {
    e.preventDefault();

    dispatch(deleteAlbum(location.state.id));

    history.push("/albums");
  }


  let sessionLinks;

  if (sessionUser.id === location.state.userId) {
    
    const userId = location.state.userId;
    const id = location.state.id;

    sessionLinks = (
      <div id='edit-bar' className='album-btns'>
        <NavLink to={{pathname: `/albums/${location.state.id}/edit`, state: {id, userId}}}><button type='submit'>Add Image</button></NavLink>
        <button onClick={handleDelete} type='submit'>Delete</button>
      </div>
    )
  }

  return (
    <div className="main-content fix-height">
    
      <h1 className='album-title'>{albumImages.album && albumImages.album.title}</h1>

      {albumImages.albumImages && albumImages.albumImages.length === 0 && (
        <h3 className='album-title'>No images added yet!</h3>
      )}

      <ul>
        {albumImages.albumImages && albumImages.albumImages.map(({ id, imageUrl, content, userId }) => (
          <li key={id}>
          <NavLink to={{pathname: `/images/${id}`, state:{id, imageUrl, content, userId}}}>
            <img id={id} src={imageUrl}></img>
          </NavLink>
        </li>
        ))}
      </ul>

      {sessionLinks && sessionLinks}
    
    
    </div>
  );

};


export default SingleAlbum;