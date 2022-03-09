import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import EditImageModal from '../EditImage';

import { deleteImage } from '../../store/imageReducer';

import './SingleImage.css'

const SingleImage = ({ sessionUser }) => {

  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  console.log(location)

  const handleSubmit = (e) => {

    e.preventDefault();

    dispatch(deleteImage(location.state.id));

    history.push('/');
  };




  let sessionLinks;

  if (sessionUser.id === location.state.userId) {
    
    sessionLinks = (
      <>
        <EditImageModal state={location.state}/>
        <button type='submit' onClick={handleSubmit}>Delete</button>
      </>
    )
  }

  return (
    <div className='fix-height' id='single-image-card'>

      <h3>{`By: ${sessionUser.username}`}</h3>

      <img src={location.state.imageUrl} />

      <p>{location.state.content}</p>

      {sessionLinks && sessionLinks}

    </div>
  );
};


export default SingleImage;