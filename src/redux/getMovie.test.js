import React from 'react';
import {EDIT_MOVIE} from "./actions";
import reducer  from './reducer'

describe('getMovie', () => {
  it('should return the initial state', () => {
    const action = {
      type: EDIT_MOVIE,
      movie: undefined
    };

    expect(reducer({}, action)).toEqual({
      movie: undefined,
      moviesApi: {
        movies: []
      }
  })
  })
});
