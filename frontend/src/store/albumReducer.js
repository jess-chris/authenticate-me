import { csrfFetch } from "./csrf";

const LOAD_ALBUMS = "albums/loadAlbums";
const ADD_ALBUM = "albums/addAlbum";

export const loadAlbums = (albums) => {
  return { type: LOAD_ALBUMS, albums }
};


export const addAlbum = (newAlbum) => ({
  type: ADD_ALBUM,
  newAlbum
});



export const fetchAlbums = () => async dispatch => {

  const res = await fetch('/api/albums');
  const albums = await res.json();

  dispatch(loadAlbums(albums));
  return albums;
};


export const fetchAlbum = async (data) => {

  const res = await fetch(`/api/albums/${data}`)
  const album = await res.json();

  //dispatch(loadAlbums(album));
  return album;

};



const initialState = { entries: {}, isLoading: true};


const albumReducer = (state = initialState, action) => {

  let newState;
  let newAlbums;

  switch(action.type) {

    case LOAD_ALBUMS:

      newState = {...state};
      newAlbums = {};

      action.albums.albums.forEach(album => newAlbums[album.id] = album);
      newState.entries = newAlbums;
      return newState;

    default:
      return state;
  };


};


export default albumReducer;