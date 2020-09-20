import React from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import {BrowserRouter} from "react-router-dom";
import MenuPanel from "./panel/MenuPanel";
import CircularProgress from '@material-ui/core/CircularProgress';
import {Provider} from "react-redux";
import movieApp from "../redux/reducer";
import {createStore} from "redux";
import {setMovies} from "../redux/actions";

const callToApi = () => {
  const [items, setData] = React.useState(undefined);

  React.useEffect(() => {

    fetch("https://reactjs-cdp.herokuapp.com/movies")
      .then(res => res.json())
      .then(
        (result) => {
          setData(result.data);
        },
        (error) => {
          setData({
            error
          });
        }
      );
  }, []);

  return [items];
};

const spinnerStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%'
};


const App = () => {
  const store = createStore(movieApp);
  const [items] = callToApi();
  console.log(items)
   store.dispatch(setMovies(items));
  console.log(store.getState())
  const [movie, setMovie] = React.useState(undefined);

  if (items) {
    return (
      <BrowserRouter forceRefresh={true}>
        <Provider store={store}>
          <div>
            <Header itemsLength={items.length} movie={movie}/>
            <MenuPanel/>
            <Body onMovieClick={(selectedMovie) => setMovie(selectedMovie)} items={items}/>
            <Footer/>
          </div>
        </Provider>
      </BrowserRouter>
    );
  } else {
    return <CircularProgress style={spinnerStyle}/>
  }

};

export default App;
