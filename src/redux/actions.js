export const SET_MOVIES = 'SET_MOVIES';
export const CREATE_MOVIE = 'CREATE_MOVIE';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const SORT_MOVIES = 'SORT_MOVIES';
export const FILTER_MOVIES = 'FILTER_MOVIES';

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

export const deleteeMovie = (movie) => ({
  type: DELETE_MOVIE,
  movie
});

export const sortMovie = (sort) => ({
  type: SORT_MOVIES,
  sort
});

export const filtereMovie = (filter) => ({
  type: FILTER_MOVIES,
  filter
});

