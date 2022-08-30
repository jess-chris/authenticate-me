import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EditImageModal from '../EditImage';

import { deleteImage } from '../../store/imageReducer';

import './SingleImage.css'

const SingleImage = () => {

  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector(state => state.session.user);

  if (!sessionUser) history.push("/");

  const handleSubmit = (e) => {

    e.preventDefault();

    dispatch(deleteImage(location.state.id));

    history.push('/');
  };


  let sessionLinks;

  if (sessionUser.id === location.state.userId) {
    
    sessionLinks = (
      <div id='edit-bar'>
        <EditImageModal state={location.state}/>
        <button type='submit' onClick={handleSubmit}>Delete</button>
      </div>
    )
  }

  return (
    <div className='fix-height' id='single-image-card'>

      <h3>{`By: ${sessionUser.username}`}</h3>

      <img id='single-image-view' src={location.state.base64} />

      <p>{location.state.content}</p>

      {sessionLinks && sessionLinks}

    </div>
  );
};


export default SingleImage;