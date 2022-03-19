import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { postAlbum, fetchAlbums } from "../../store/albumReducer";

import "./CreateAlbum.css";

function CreateAlbum({ sessionUser }) {

  const dispatch = useDispatch();
  const history = useHistory();

  if(!sessionUser) history.push("/");

  const { id } = sessionUser;

  const albumsObject = useSelector((state) => state.albumState.entries);
  const albums = Object.values(albumsObject);

  useEffect(() => {
    
    dispatch(fetchAlbums(albums));
    
  }, [dispatch]);
  


  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();


    const newAlbum = {
      userId: id,
      title
    };

    dispatch(postAlbum(newAlbum));
    dispatch(fetchAlbums(albums));

    history.push("/albums");
    
  };

  return (
    <form id="new-album-form" onSubmit={handleSubmit}>
      
      <h6>Create new album:</h6>  
      
      <label>Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          size="50"
          required
        />
      </label>

      <button type="submit">Create</button>
      
    </form>

  );



};


export default CreateAlbum;