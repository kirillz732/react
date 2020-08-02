import React, {Component} from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import {BrowserRouter} from "react-router-dom";

export default class App extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    fetch("https://reactjs-cdp.herokuapp.com/movies")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({items: result.data});
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  render() {
    return (
      <BrowserRouter forceRefresh={true}>
        <div>
          <Header itemsLength={this.state.items.length}/>
          <Body items={this.state.items}/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
};
