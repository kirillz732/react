import React from 'react';

import ErrorBoundary from './ErrorBoundary';
import Movie from "./Movie";

import {NavLink} from "react-router-dom";
import '../styles/style.scss';

const Body = (props) => {

  const setSelectedMovie = (movie) => {
   props.onMovieClick(movie);
  };

    return (
      <div className='container'>
        <ErrorBoundary>
          <div className='movies-item'>{props.items.length} movies found </div>
          {props.items.map( (item) =>
              <Movie key={item.id} onItemClict={(selectedMovie) => setSelectedMovie(selectedMovie)} movieItem={item}/>
          )}
        </ErrorBoundary>
      </div>
    )
};

export default Body;
