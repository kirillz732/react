import React from 'react';

import ErrorBoundary from './ErrorBoundary';

import {NavLink} from "react-router-dom";
import '../styles/style.scss';
import {useSelector} from "react-redux";
import Movie from "./Movie";
import CircularProgress from "@material-ui/core/CircularProgress";

const spinnerStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%'
};

const Body = () => {

  const movieArr = useSelector(state => state.moviesAPI.movies);

    return (
      <div className='container'>
        <ErrorBoundary>
          <div className='movies-item'>{movieArr.length} movies found</div>
          {movieArr.length ? movieArr.map((item) =>
            <NavLink to={`/film/${item.id}`} key={item.id}>
              <Movie key={item.id} movieItem={item}/>
            </NavLink>
          ) : <CircularProgress style={spinnerStyle}/>
          }
        </ErrorBoundary>
      </div>
    )
};

export default Body;
