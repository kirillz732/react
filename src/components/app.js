import React from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import {BrowserRouter} from "react-router-dom";
import MenuPanel from "./panel/MenuPanel";
import CircularProgress from '@material-ui/core/CircularProgress';

const callToApi = () =>{
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
   const [items] = callToApi();
   const [movie, setMovie] = React.useState(undefined);

  if (items) {
    return (
      <BrowserRouter forceRefresh={true}>
        <div>
          <Header itemsLength={items.length} movie={movie} />
          <MenuPanel/>
          <Body onMovieClick={(selectedMovie) => setMovie(selectedMovie)}  items={items}/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  } else {
    return <CircularProgress style={spinnerStyle}/>
  }

};

export default App;
