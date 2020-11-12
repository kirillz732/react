import {EDIT_MOVIE} from "./actions";


export function getMovie(state = {movie: {}}, action) {
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

