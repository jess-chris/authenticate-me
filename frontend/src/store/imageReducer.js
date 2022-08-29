import { csrfFetch } from "./csrf";
import { gzip } from "pako";


const LOAD_IMAGES = 'images/loadImages';
const ADD_IMAGE = 'images/addImage';



export const loadImages = (images) => {

  return { type: LOAD_IMAGES, images }
};


export const addImage = (newImage) => ({
  type: ADD_IMAGE,
  newImage
});





export const fetchImages = () => async dispatch => {

  const res = await fetch('/api/images');
  const images = await res.json();

  dispatch(loadImages(images));
  return images;
};

export const fetchUserImages = async (data) => {

  const res = await fetch(`/api/images/user/${data}`);
  const images = await res.json();

  return images;
};


export const postImage = (data) => async dispatch => {

  //const arr = Object.entries(data)

  const zipData = await gzip(JSON.stringify(data));

  const res = await csrfFetch('/api/images', {
    method: "POST",
    headers: {
      'Content-Encoding': 'gzip',
      "Content-Type":"application/json"
    },
    body: zipData
  });

  const newImages = await res.json();

  dispatch(addImage(newImages));
  return 'OK';
};


export const updateImage = (data) => async dispatch => {


  const res = await csrfFetch('/api/images', {
    method: "PUT",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(data)
  });

  const newImage = await res.json();


  dispatch(addImage(newImage));
  return newImage;
};


export const deleteImage = (data) => async dispatch => {


  const res = await csrfFetch(`/api/images/${data}`, {
    method: "DELETE",
    headers: {"Content-Type":"application/json"},
  });

  const deletedImage = await res.json();

  dispatch(fetchImages());

  return deletedImage;

};


const initialState = { entries: {}, isLoading: true};

const imageReducer = (state = initialState, action) => {

  let newState;
  let newImages;

  switch (action.type) {

    case LOAD_IMAGES:
      newState = {...state};
      newImages = {};

      action.images.images.forEach(image => newImages[image.id] = image);
      newState.entries = newImages;
      return newState;

    case ADD_IMAGE:
      newState = {...state};
      newImages = {...state.entries};

      for (let item in action.newImage) {
        newImages[item.id] = item;
      }

      newState.entries = newImages;

      return newState;
      
    default:
      return state;
  };

};

export default imageReducer;