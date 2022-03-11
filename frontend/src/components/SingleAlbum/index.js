import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { fetchAlbum } from '../../store/albumReducer';

import "./SingleAlbum.css";

const SingleAlbum = ({ sessionUser }) => {

  const [albumImages, setAlbumImages] = useState({});

  const location = useLocation();

  useEffect(async () => {
    setAlbumImages(await fetchAlbum(location.state.id));
  }, []);

  return (
    <div className="main-content fix-height">
    
    <h1>{albumImages.album && albumImages.album.title}</h1>

    {albumImages.albumImages && albumImages.albumImages.length === 0 && (
      <h3>No images added yet!</h3>
    )}

    <ul>
      {albumImages.albumImages && albumImages.albumImages.map(({id, imageUrl}) => (
        <li key={id}>
            <img id={id} src={imageUrl} />
        </li>
      ))}
    </ul>
    
    
    </div>
  );

};


export default SingleAlbum;