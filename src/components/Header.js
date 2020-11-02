import * as React from 'react';

import Button from '@material-ui/core/Button';
import Search from "./Search";
import Film from "./Film";
import { Route, Switch as RouterSwitch} from "react-router-dom";
import NoFilms from "./NoFilms";
import CreateForm from "./CreateForm/CreateForm";

import NotFound from "./404/NotFound";
import {Redirect} from "react-router";


const Header = () => {
  return (
      <div className='header'>
        <div className='header-title'>
          ReactJS mentoring
          <CreateForm open={true} isAddMovie={true}/>
        </div>
        <RouterSwitch >
          <Route path='/film/:id' component={Film}/>
          <Route exact path="/" component={Search}/>
          <Route exact path="/404" component={NotFound} />
          <Route component={NoFilms}/>
        </RouterSwitch>
      </div>
  )
};

export default Header;
