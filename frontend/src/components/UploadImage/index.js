import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postImage } from "../../store/imageReducer";
import { useHistory } from "react-router-dom";
import './UploadImage.css';

function UploadImage({ sessionUser }) {

  const { id } = sessionUser;

  const dispatch = useDispatch();
  const history = useHistory();

  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    const newImage = {
      id,
      imageUrl,
      content
    };

    dispatch(postImage(newImage));
    history.push("/")
  };

  return (
    <form id="new-image-form" onSubmit={handleSubmit}>
      <h6>Upload new image:</h6>

      <label>Image Url: 
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          size="50"
          required
        />
      </label>

      <label>Content: 
        <input
          type="text"
          placeholder="Optional"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          size="50"
        />
      </label>

      <button type="submit">Upload</button>


    </form>
  );

};



export default UploadImage;