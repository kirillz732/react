import React from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import {BrowserRouter} from "react-router-dom";
import MenuPanel from "./panel/MenuPanel";
import {useDispatch, useSelector} from "react-redux";
import {getMovieApi} from "../redux/actions";

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
      dispatch(getMovieApi())
    }, []
  );
  const items = useSelector(state => state.moviesAPI.movies);

  return (
      <BrowserRouter>
        <div>
          <Header itemsLength={items.length}/>
          <MenuPanel/>
          <Body/>
          <Footer/>
        </div>
      </BrowserRouter>
  );
};

export default App;
