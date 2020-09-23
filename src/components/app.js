import React from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import {BrowserRouter} from "react-router-dom";
import MenuPanel from "./panel/MenuPanel";
import {useDispatch, useSelector} from "react-redux";
import {getMovieApi} from "../redux/actions";
import CircularProgress from "@material-ui/core/CircularProgress";

const spinnerStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%'
};

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
      dispatch(getMovieApi())
    }, []
  );
  const items = useSelector(state => state.moviesAPI.movies);


  if (items) {
  return (
      <BrowserRouter forceRefresh={true}>
        <div>
          <Header itemsLength={items.length}/>
          <MenuPanel/>
          <Body/>
          <Footer/>
        </div>
      </BrowserRouter>
  );
  } else {
    return <CircularProgress style={spinnerStyle}/>
  }

};

export default App;
