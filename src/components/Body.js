import React from 'react';

import ErrorBoundary from './ErrorBoundary';
import Movie from "./Movie";
import Film from "./Film";

import {NavLink} from "react-router-dom";
import '../styles/style.scss';

export default function Body() {
  const items = [{id: 1}, {id: 2}]

    return (
      <div className='container'>

        <ErrorBoundary>
          <For each="item" in={items}>
            <NavLink to={`/film/${item.id}`} key={item.id}>
              <Movie key={item.id} movieItem={item}/>
            </NavLink>
          </For>
          <Film />
        </ErrorBoundary>
      </div>
    )
};
