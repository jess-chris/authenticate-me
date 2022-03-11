import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./CreateAlbum.css";

function CreateAlbum({ sessionUser }) {

  const { id } = sessionUser;

  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();


    const newAlbum = {
      id,
      title
    };

    dispatch()
    
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