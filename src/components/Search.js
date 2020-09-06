import * as React from 'react';

import '../styles/style.scss';

import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";

const Search = () => {
  const searchInput = '';
    return (

      <div className='search-component'>
        <div className='title'>Fiend your movie</div>
        <div className='search'>
          <input className='search-input' id="outlined-basic" variant="outlined" />
          <NavLink to={`/`}>
            <Button type='submit' variant="contained" className='search-button' color="secondary" color="secondary"
                    onClick={() => console.log('search')}>
              Search
            </Button>
          </NavLink>
        </div>
      </div>

    )
};

export default Search;
