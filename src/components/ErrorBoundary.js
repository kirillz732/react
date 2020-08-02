import React, { Component } from 'react';


export default class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  render() {
    if (this.state.hasError) {
      return (
        <div> Error</div>
      );
    } else {
      return this.props.children;
    }
  }
};