import React from 'react';

import '../styles/style.scss';

import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";

export default function Search() {

    const searchInput = '';

    function getInputValue() {
      searchInput = document.getElementById('outlined-basic');
      return searchInput;
    }

    return (

      <div className='search-component'>
        <div className='title'>Fiend your movie</div>
        <div className='search'>
          <input className='search-input' id="outlined-basic" variant="outlined" />
          <NavLink to={`/search/${searchInput}`}>
            <Button type='submit' variant="contained" className='search-button' color="secondary" color="secondary"
                    onClick={getInputValue}>
              Search
            </Button>
          </NavLink>
        </div>

        <div className='search-by'>Search by
          <div className="toggle">
            <input type="radio" name="searchBy" value="weight" id="Title" checked="checked"/>
            <label htmlFor="Title">Title</label>
            <input type="radio" name="Gengre" value="dimensions" id="Gengre"/>
            <label htmlFor="Gengre">Gengre</label>
          </div>
        </div>
      </div>

    )
};
