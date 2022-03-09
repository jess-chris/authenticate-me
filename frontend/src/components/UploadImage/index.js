import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postImage } from "../../store/imageReducer";
import './UploadImage.css';

function UploadImage({ sessionUser }) {

  const { id } = sessionUser;

  const dispatch = useDispatch();

  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");


  const reset = () => {
    setImageUrl("");
    setContent("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newImage = {
      id,
      imageUrl,
      content
    };

    dispatch(postImage(newImage));
    reset();
  };

  return (
    <form id="new-image-form" onSubmit={handleSubmit}>
      <p>Testing</p>

      <label>Image Url: 
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </label>

      <label>Content: 
        <input
          type="text"
          placeholder="Optional"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>

      <button type="submit">Upload</button>


    </form>
  );

};



export default UploadImage;