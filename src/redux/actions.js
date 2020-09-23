import {useSelector} from "react-redux";

export const SET_MOVIES = 'SET_MOVIES';
export const CREATE_MOVIE = 'CREATE_MOVIE';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const SORT_MOVIES = 'SORT_MOVIES';
export const FILTER_MOVIES = 'FILTER_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';

export const Filter = {
  ALL: 'ALL',
  DOCUMENTARY: 'DOCUMENTARY',
  COMEDY: 'COMEDY',
  HORROR: 'HORROR',
  CRIME: 'CRIME'
};

export const Sort = {
  DATE: 'DATE',
  NAME: 'NAME',
  RATE: 'RATE'
};

export const setMovies = (movies) => ({
  type: SET_MOVIES,
  movies
});

export const createMovie = (movie) => ({
  type: CREATE_MOVIE,
  movie
});

export const updateMovie = (movie) => ({
  type: UPDATE_MOVIE,
  movie
});

export const editeMovie = (movie) => ({
  type: EDIT_MOVIE,
  movie
});

export const deleteMovie = () => ({
  type: DELETE_MOVIE
})

export const deleteMovieApi = (id) => (dispatch) => {
  fetch(`http://localhost:4000/movies/${id}`, {method: 'DELETE'})
    .then(res => res.json())
    .then(
      (result) => {
        dispatch(editeMovie(result));
      },
      (error) => {
        console.log(error)
      }
    ).then(deleteMovie)
    .then(getMovieApi());
};

export const sortMovie = (sort) => ({
  type: SORT_MOVIES,
  payload: sort
});

export const filtereMovie = (filter) => ({
  type: FILTER_MOVIES,
  payload: filter
});

export const getMovie = (id) =>
  (dispatch) => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then(res => res.json())
      .then(
        (result) => {
          dispatch(editeMovie(result));
        },
        (error) => {
          console.log(error)
        }
      );
  };

export const getMovieApi = () =>
  (dispatch) => {
    fetch(`http://localhost:4000/movies/`)
      .then(res => res.json())
      .then(
        (result) => {
          dispatch(setMovies(result.data));
        },
        (error) => {
          console.log(error)
        }
      );
  };

