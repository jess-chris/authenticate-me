const LOAD_IMAGES = 'images/loadImages'


export const loadImages = (images) => {

  return { type: LOAD_IMAGES, images }
};



export const fetchImages = () => async dispatch => {

  const res = await fetch('/api/images');
  const images = await res.json();
  
  //console.log(images);

  dispatch(loadImages(images));
  return images;
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
    default:
      return state;
  };

};

export default imageReducer;