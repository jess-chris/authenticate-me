import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateImage } from "../../store/imageReducer";
import { useHistory } from "react-router-dom";



import "./EditImage.css";

function EditImage({ state }) {

  const history = useHistory();
  const dispatch = useDispatch();

  const [imageUrl, setImageUrl] = useState(state.imageUrl);
  const [content, setContent] = useState(state.content);


  const { userId, id } = state;

  const handleSubmit = (e) => {

    e.preventDefault();

    const updatedImage = {
      id,
      imageUrl,
      content,
      userId
    };

    dispatch(updateImage(updatedImage));

    history.push({pathname:`/images/${updatedImage.id}`, state:{id, userId, imageUrl, content}});

  };

  return (

    <form id="edit-form" onSubmit={handleSubmit}>

      <label>
        Image Url:
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </label>

      <label>
        Content:
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>

      <button id="edit-btn-submit" type="submit">Submit</button>
    </form>

  );

};

export default EditImage;