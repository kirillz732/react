import React, {Component} from 'react';

import ErrorBoundary from './ErrorBoundary';
import Movie from "./Movie";
import {NavLink} from "react-router-dom";

import '../styles/style.scss';

export default class Body extends Component {

  render() {
    return (
      <div className='container'>

        <ErrorBoundary>
          <For each="item" in={this.props.items}>
            <NavLink to={`/film/${item.id}`} key={item.id}>
              <Movie key={item.id} movieItem={item}/>
            </NavLink>
          </For>
        </ErrorBoundary>
      </div>
    )
  }
};
