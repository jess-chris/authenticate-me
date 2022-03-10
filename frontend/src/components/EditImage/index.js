import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch } from "react-redux";
import { updateImage } from "../../store/imageReducer";
import { useHistory } from "react-router-dom";

import "./EditImage.css";

function EditImageModal({ state }) {

  const [showModal, setShowModal] = useState(false);

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

    setShowModal(false);

    history.push({pathname:`/images/${updatedImage.id}`, state:{id, userId, imageUrl, content}});

  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div id='edit-image-card'>
            <form id="edit-form" onSubmit={handleSubmit}>
              <h6>Edit image:</h6>

              <label>
                Image Url:
                <input
                  type="text"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  size="50"
                  required
                />
              </label>

              <label>
                Content:
                <input
                  type="text"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  size="50"
                />
              </label>

              <button id="edit-btn-submit" type="submit">Submit</button>
            </form>
          </div>
        </Modal>
      )}
    </>
  );



};

export default EditImageModal;