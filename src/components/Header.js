import * as React from 'react';

import Button from '@material-ui/core/Button';
import Search from "./Search";
import Film from "./Film";
import {BrowserRouter, Route, Switch as RouterSwitch} from "react-router-dom";
import NoFilms from "./NoFilms";
import CreateForm from "./CreateForm/CreateForm";


const Header = (props) => {

  const SelectedFilm = (props) => {
    const movie = props.movie;
    if (movie) {
      return <Film item={movie}/>
    } else {
      return <Search/>;
    }
  };

  return (
    <BrowserRouter>
      <div className='header'>
        <div className='header-title'>
          ReactJS mentoring
          <CreateForm open={true} isAddMovie={true}/>
        </div>
        <SelectedFilm movie={props.movie}/>
        {/*<RouterSwitch >*/}
        {/*  <Route path="/" component={Search}/>*/}
        {/*  /!*<Route path='/film/:id' component={Film}/>*!/*/}

        {/*  <Route component={NoFilms}/>*/}
        {/*</RouterSwitch>*/}
      </div>
    </BrowserRouter>
  )
};

export default Header;
