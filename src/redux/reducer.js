import {combineReducers} from 'redux'
import {
  CREATE_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  Filter,
  FILTER_MOVIES, SET_MOVIES,
  Sort,
  SORT_MOVIES,
  UPDATE_MOVIE
} from './actions'

function moviesAPI(state = [], action) {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.movies
      };
    case SORT_MOVIES:
      const key = action.payload;
      return {
        ...state,
        movies: state.movies.sort((a, b) => a[key] > b[key] ? 1 : -1)
  };
    case FILTER_MOVIES:
      const genre = action.payload;
      return {
        ...state,
        movies: state.movies.filter(item => item.genres[0] === genre)
      };
    case CREATE_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };
    case DELETE_MOVIE:
      const id = action.payload;
      return {
        ...state,
        movies: state.movies.filter(item => item.id !== id),
      };
    case UPDATE_MOVIE:
      return {
        ...state,
        movie: state.map((item) => {
          if (item.id === action.payload.id) {
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
        })
      };
    default:
      return state
  }
}

function getMovie(state = [], action) {
  switch (action.type) {
    case EDIT_MOVIE:
      return {
        ...state,
        movie: action.movie
      };
    default:
      return state
  }
}

const movieApp = combineReducers({
  moviesAPI,
  getMovie
});

export default movieApp
