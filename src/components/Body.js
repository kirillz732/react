import React from 'react';

import ErrorBoundary from './ErrorBoundary';
import Movie from "./Movie";

import {NavLink} from "react-router-dom";
import '../styles/style.scss';

const Body = (props) => {
    return (
      <div className='container'>
        <ErrorBoundary>
          <div className='movies-item'>{props.items.length} movies found </div>
          {props.items.map( (item) =>
            <NavLink to={`/film/${item.id}`} key={item.id}>
              <Movie key={item.id} movieItem={item}/>
            </NavLink>
          )}
        </ErrorBoundary>
      </div>
    )
};

export default Body;
