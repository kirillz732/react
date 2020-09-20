import { combineReducers } from 'redux'
import {CREATE_MOVIE, DELETE_MOVIE, EDIT_MOVIE, Filter, FILTER_MOVIES, Sort, SORT_MOVIES, UPDATE_MOVIE} from './actions'

function filterMovies(state = Filter.ALL, action) {
  switch (action.type) {
    case FILTER_MOVIES:
      return action.filter;
    default:
      return state
  }
}

function sortMovies(state = Sort.NAME, action) {
  switch (action.type) {
    case SORT_MOVIES:
      return action.filter;
    default:
      return state
  }
}

function movies(state = [], action) {
  switch (action.type) {
    case CREATE_MOVIE:
      return [
        ...state,
        {
          movie: action.payload,
        }
      ];
    case DELETE_MOVIE:
      return state.filter(movies => movie.id !== action.payload);
    case UPDATE_MOVIE:
      return state.map((item) => {
        if(item.id === action.payload.id) {
          return {
            ...item,
            poster_path: action.payload.poster_path,
            title: action.payload.title,
            release_date: action.payload.release_date,
            vote_count: action.payload.vote_count,
            overview: action.payload.overview,
            genres: action.payload.genres,
            tagline: action.payload.tagline
          }
        }
        return item;
      });
    case EDIT_MOVIE:
      return state.filter(movies => movie.id === action.payload);
    default:
      return state
  }
}

const movieApp = combineReducers({
  filterMovies,
  sortMovies,
  movies
})

export default movieApp
