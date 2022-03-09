import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Switch } from "react-router-dom";
import './MainContent.css';
import { fetchImages } from '../../store/imageReducer';


function MainContent() {
  const dispatch = useDispatch();

  const imagesObject = useSelector((state) => state.imageState.entries);
  const images = Object.values(imagesObject);

  console.log(images);

  useEffect(() => {

    dispatch(fetchImages());
  }, [dispatch]);

  return (
    <ul>
      {images.map(({ id, imageUrl}) => (
        <li key={id}>
          <NavLink to={`/images/${id}`}>
            <img id={id} src={imageUrl}></img>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};


export default MainContent;