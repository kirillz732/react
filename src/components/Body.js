import React from 'react';

import ErrorBoundary from './ErrorBoundary';

import {NavLink} from "react-router-dom";
import '../styles/style.scss';
import {useSelector} from "react-redux";
import Movie from "./Movie";

const Body = () => {

  const movieArr = useSelector(state => state.moviesAPI.movies);

  if (movieArr) {
    return (
      <div className='container'>
        <ErrorBoundary>
          <div className='movies-item'>{movieArr.length} movies found</div>
          {movieArr.map((item) =>
            <Movie key={item.id} movieItem={item}/>
          )}
        </ErrorBoundary>
      </div>
    )
  }
};

export default Body;
