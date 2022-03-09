import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { fetchImages } from '../../store/imageReducer';

import './MainContent.css';

function MainContent() {
  const dispatch = useDispatch();

  const imagesObject = useSelector((state) => state.imageState.entries);
  const images = Object.values(imagesObject);

  console.log(images)

  useEffect(() => {

    dispatch(fetchImages());
  }, [dispatch]);

  return (

    <ul>
      {images.map(({ id, imageUrl, content, userId}) => (
        <li key={id}>
          <NavLink to={{pathname: `/images/${id}`, state:{id, imageUrl, content, userId}}}>
            <img id={id} src={imageUrl}></img>
          </NavLink>
        </li>
      ))}
    </ul>

  );
};


export default MainContent;