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
  
  //console.log(images);

  dispatch(loadImages(images));
  return images;
};


export const postImage = (data) => async dispatch => {

  const res = await fetch('/api/images', {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(data)
  });

  const newImage = await res.json();

  dispatch(addImage(newImage));
  return newImage;
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

      newImages[action.newImage.id] = action.newImage;
      newState.entries = newImages;

      return newState;
      
    default:
      return state;
  };

};

export default imageReducer;