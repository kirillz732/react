import React, {Component} from 'react';

import '../styles/style.scss';

export default class Movie extends Component {
  render() {
    let data = this.props.movieItem;
    return (
      <div className='contant'>
        <div className="poster" style={{backgroundImage: `url(${data.poster_path})`}}> </div>
        <div className='info'>
          <div className='movie-title'>
            {data.title}
            <div className='year'>
              {data.release_date}
            </div>
          </div>
          <div className='genre'>
            {data.genres[0]}
          </div>
        </div>
      </div>
    )
  }
};
