import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchImages, updateImage } from "../../store/imageReducer";
import { useHistory, useLocation, useParams } from "react-router-dom";

import { fetchUserImages } from '../../store/imageReducer';
import { editAlbum } from '../../store/albumReducer';

import "./EditAlbum.css";

function EditAlbum({ sessionUser }) {
  
  const dispatch = useDispatch();

  const history = useHistory();
  const [userImages, setUserImages] = useState({});
  const [selectedImages, setSelectedImages] = useState(new Set());

  if (!sessionUser) history.push("/");

  const { id } = useParams();
  const userId = sessionUser.id;

  useEffect(() => {

    dispatch(fetchImages(images));
  }, [dispatch]);

  const imagesObject = useSelector((state) => state.imageState.entries);
  const images = Object.values(imagesObject);

  const handleSubmit = (e) => {

    e.preventDefault();

    const newAlbum = [...selectedImages];

    dispatch(editAlbum({id, images: newAlbum}));
    dispatch(fetchImages(images));

    history.push({pathname:`/albums/${id}`, state:{userId, id}});

  };



  useEffect(async () => {

    setUserImages(await fetchUserImages(sessionUser.id));

  }, []);


  const handleChange = (e) => {

    if (selectedImages.has(e.target.value)) {
      selectedImages.delete(e.target.value);
    } else {
      selectedImages.add(e.target.value);
    }

  };

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