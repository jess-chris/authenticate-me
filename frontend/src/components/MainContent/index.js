import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { fetchImages } from '../../store/imageReducer';

import './MainContent.css';

function MainContent() {
  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(fetchImages(images));
  }, [dispatch]);
  
  const imagesObject = useSelector((state) => state.imageState.entries);
  const images = Object.values(imagesObject);
  
  return (

    <ul>
      {images.map(({ id, base64, content, userId}) => (
        <li key={id+12312}>
          <NavLink to={{pathname: `/images/${id}`, state:{id, base64, content, userId}}}>
            <img id={id} src={base64}></img>
          </NavLink>
        </li>
      ))}
    </ul>

  );
};


export default MainContent;