import React from 'react';

import ErrorBoundary from './ErrorBoundary';
import Movie from "./Movie";

import {NavLink} from "react-router-dom";
import '../styles/style.scss';
import Film from "./Film";

const Body = (props) => {
    return (
      <div className='container'>
        <ErrorBoundary>
          <div className='movies-item'>{props.items.length} movies found </div>
          {props.items.map( (item) =>
              <Movie key={item.id} movieItem={item}/>
          )}
          <Film></Film>
        </ErrorBoundary>
      </div>
    )
};

export default Body;
