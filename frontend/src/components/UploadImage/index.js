import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postImage } from "../../store/imageReducer";
import { useHistory } from "react-router-dom";
import './UploadImage.css';

function UploadImage() {

  const sessionUser = useSelector(state => state.session.user);
  const { id } = sessionUser;

  const dispatch = useDispatch();
  const history = useHistory();

  if (!sessionUser) history.push("/");

  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [curFileList] = useState([]);

  const validFileTypes = ['image/png', 'image/jpg', 'image/jpeg'];


  const toBase64 = async file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});


  const handleSubmit = async (e) => {
    e.preventDefault();

    const pendingImages = {};

    for (let x = 0; x < curFileList.length; x++) {

      const { base64, name, type } = curFileList[x];

      pendingImages[name] = { base64, name, type, userId: id };
    }

    await dispatch(postImage(pendingImages));
    history.push("/")
  };


  async function updateImagePreview() {

    // e.preventDefault()
    // setImageUrl(e.target.value)

    const uploadInput = document.querySelector('.upload-input');
    const uploadPreview = document.querySelector('.upload-preview');

    while(uploadPreview.firstChild) {
      uploadPreview.removeChild(uploadPreview.firstChild);
    }
    
    if (curFileList.length === 0 && uploadInput.files.length === 0) {
      
      const defaultText = document.createElement('p')
      defaultText.textContent = 'No files currently selected'
      
      uploadPreview.appendChild(defaultText)
      
    } else {
      const imageList = document.createElement('ol')
      uploadPreview.appendChild(imageList)
      curFileList.push(uploadInput.files[0])

      
      for (let file of curFileList) {
        const listItem = document.createElement('li')
        const fileText = document.createElement('p')
        
        if (validFileTypes.includes(file.type)) {
          // fileText.textContent = `File name: ${file.name}`
          const imgCode = await toBase64(file);

          file['base64'] = imgCode;

          const listImage = document.createElement('img');
          listImage.src = imgCode;

          listItem.appendChild(listImage);
          // listItem.appendChild(fileText)

        } else {

          fileText.textContent = `File name: ${file.name} - Not a valid file type!`;

          listItem.appendChild(fileText);

          curFileList.pop();
        }

        imageList.appendChild(listItem);

      }
    }

    console.log(curFileList);
  }




  return (
    <form id="new-image-form" onSubmit={handleSubmit}>
      <h6>Upload new image:</h6>

      <label>Choose file
        <input
          className="upload-input"
          type="file"
          accept=".png, .jpg, .jpeg"
          value={imageUrl}
          onChange={updateImagePreview}
          multiple
        />
      </label>

      <div className="upload-preview">
          {imageUrl && imageUrl && (
            <img src={imageUrl}></img>
          )}
        </div>

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