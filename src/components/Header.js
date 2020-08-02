import React, {Component} from 'react';

import Search from "./Search";
import Film from "./Film";
import {BrowserRouter, Route, Switch as RouterSwitch } from "react-router-dom";
import NoFilms from "./NoFilms";


export default class Header extends Component {
  render() {

    return (
      <BrowserRouter>
        <div className='header'>
          <RouterSwitch >
            <Route path="/" exact component={Search}/>
            <Route path='/film/:id' component={Film}/>
            <Route component={NoFilms}/>
          </RouterSwitch>
          <div className='found-movies'>
            <div className='title-found-movie'>{this.props.itemsLength} movie found</div>
            <div className='sort'>
              <div className='sort-by'>
                Sort By
              </div>
              <div className="toggle">
                <input type="radio" name="Release" value="weight" id="Release" checked="checked"/>
                <label htmlFor="Release">Release Date</label>
                <input type="radio" name="Rating" value="dimensions" id="Rating"/>
                <label htmlFor="Rating">Rating</label>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
};
