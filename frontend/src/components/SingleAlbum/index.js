import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory, NavLink, useParams } from 'react-router-dom';
import { fetchAlbum, deleteAlbum, fetchAlbums } from '../../store/albumReducer';
import { fetchImages } from '../../store/imageReducer';

import "./SingleAlbum.css";

const SingleAlbum = () => {

  const dispatch = useDispatch();

  const location = useLocation();
  const history = useHistory();
  const params = useParams();

  const sessionUser = useSelector(state => state.session.user);

  const { id } = params;
  const pathId = id;

  useEffect(() => {

    dispatch(fetchAlbums(albums));
    dispatch(fetchImages(images));

  }, [dispatch]);

  const albumsObject = useSelector((state) => state.albumState.entries);
  const albums = Object.values(albumsObject);

  const imagesObject = useSelector((state) => state.imageState.entries);
  const images = Object.values(imagesObject);

  const [albumImages, setAlbumImages] = useState({});

  useEffect(async () => {
    setAlbumImages(await fetchAlbum(location.state.id));
  }, []);



  const handleDelete = (e) => {
    e.preventDefault();

    dispatch(deleteAlbum(location.state.id));
    dispatch(fetchAlbums(albums))

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
    
      { <h1 className='album-title'>{albumImages.album && albumImages.album.title}</h1> }

      {albumImages.albumImages && albumImages.albumImages.length === 0 && (
        <h3 className='album-title'>No images added yet!</h3>
      )}

      <ul>
        {images && images.map(({ id, base64, content, userId, albumId }) => (
          <li key={id}>
          <NavLink to={{pathname: `/images/${id}`, state:{id, base64, content, userId}}}>
            {albumId == pathId && ( 
            <img id={id} src={base64}></img>
            )}
          </NavLink>
        </li>
        ))}
      </ul>

      {sessionLinks && sessionLinks}
    
    
    </div>
  );

};


export default SingleAlbum;