import React from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import {BrowserRouter, Route} from "react-router-dom";
import MenuPanel from "./panel/MenuPanel";
import {useDispatch, useSelector} from "react-redux";
import {getMovieApi} from "../redux/actions";
import Search from "./Search";
import NoFilms from "./NoFilms";
import {Switch as RouterSwitch} from "react-router";

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
      dispatch(getMovieApi())
    }, []
  );
  const items = useSelector(state => state.moviesAPI.movies);

  return (
      <BrowserRouter forceRefresh={true}>
        <div>
          {/*<RouterSwitch >*/}
          {/*  <Route exact path="/" component={Search}/>*/}
          {/*  <Route exact path="/" component={Header}/>*/}
          {/*  <Route exact path="/" component={MenuPanel}/>*/}
          {/*  <Route exact path="/" component={Body}/>*/}
          {/*<Route exact path="/" component={Search}/>*/}
          {/*<Route path='/film/:id' component={Film}/>*/}

          {/*<Route component={NoFilms}/>*/}
          {/*  <Route component={NoFilms}/>*/}
          {/*</RouterSwitch>*/}
          <Header itemsLength={items.length}/>
          {/*<Search/>*/}
          <MenuPanel/>
          <Body/>
          <Footer/>
        </div>
      </BrowserRouter>
  );
};

export default App;
