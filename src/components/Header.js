import * as React from 'react';

import Button from '@material-ui/core/Button';
import Search from "./Search";
import Film from "./Film";
import {BrowserRouter, Route, Switch as RouterSwitch } from "react-router-dom";
import NoFilms from "./NoFilms";
import CreateForm from "./CreateForm/CreateForm";
import DeleteModal from "./DeleteModal/DeleteModal";


const Header = () => {
    return (
      <BrowserRouter>
        <div className='header'>
          <div className='header-title'>
            ReactJS mentoring
            <CreateForm open={true} isAddMovie={true} />
            <DeleteModal/>
          </div>
          <RouterSwitch >
            <Route path="/" component={Search}/>
            <Route path='/film/:id' component={Film}/>
            <Route component={NoFilms}/>
          </RouterSwitch>
        </div>
      </BrowserRouter>
    )
};

export default Header;
