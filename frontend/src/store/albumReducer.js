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


export const postAlbum = (data) => async dispatch => {

  const res = await csrfFetch('/api/albums', {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(data)
  });

  const newAlbum = await res.json();

  dispatch(addAlbum(newAlbum));
  return newAlbum;
};



export const editAlbum = (data) => async dispatch => {


  const res = await csrfFetch('/api/albums', {
    method: "PUT",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(data)
  });

  const newAlbum = await res.json();

  fetchAlbums();

  return await newAlbum;
};


export const deleteAlbum = (data) => async dispatch => {

  const res = await csrfFetch(`/api/albums/${data}`, {
    method: "DELETE",
    headers: {"Content-Type":"application/json"}
  });

  const deletedAlbum = await res.json();

  fetchAlbums();

  return await deletedAlbum;

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

    case ADD_ALBUM:
      newState = {...state};
      newAlbums = {...state.entries};

      newAlbums[action.newAlbum.id] = action.newAlbum;
      newState.entries = newAlbums;

      return newState;

    default:
      return state;
  };


};


export default albumReducer;