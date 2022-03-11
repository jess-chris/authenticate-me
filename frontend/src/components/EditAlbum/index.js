import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { fetchImages, updateImage } from "../../store/imageReducer";
import { useHistory, useLocation } from "react-router-dom";

import { fetchUserImages } from '../../store/imageReducer';
import { editAlbum } from '../../store/albumReducer';

import "./EditAlbum.css";

function EditAlbum({ sessionUser }) {

  const [userImages, setUserImages] = useState({});
  const [selectedImages, setSelectedImages] = useState(new Set());

  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();


  if (sessionUser.id !== location.state.userId) history.push("/");

  const handleSubmit = (e) => {

    e.preventDefault();

    const id = location.state.id;
    const userId = location.state.userId;

    const newAlbum = [...selectedImages];

    dispatch(editAlbum({id, images: newAlbum}));
    dispatch(fetchImages());

    history.push({pathname:`/albums/${id}`, state:{userId, id}});

  };

  const handleChange = (e) => {

    if (selectedImages.has(e.target.value)) {
      selectedImages.delete(e.target.value);
    } else {
      selectedImages.add(e.target.value);
    }

  };

  useEffect(async () => {

    setUserImages(await fetchUserImages(sessionUser.id));

  }, []);

  return(
    <>
      <h2>Choose images to add:</h2>
      <form id='edit-album-form' onSubmit={handleSubmit}>

        <ul>
          {userImages.images && userImages.images.map(({ id, imageUrl }) => (
            <li id="single-image" key={`album-image-${id}`}>
              <img id={id} src={imageUrl} />
              <input 
              type="checkbox"
              value={id}
              onChange={handleChange}
              />
            </li>
          ))}

        </ul>
        

        <button className='album-btns' type='submit'>Add images</button>


      </form>
    </>
  );
};


export default EditAlbum;