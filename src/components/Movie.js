import * as React from 'react';
import * as PropTypes from 'prop-types';

import '../styles/style.scss';

const Movie = (props) => {

  return (
    <div className='contant' >
      <div className="poster" style={{backgroundImage: `url(${props.movieItem.poster_path})`}}></div>
      <div className='info'>
        <div className='movie-title'>
          {props.movieItem.title}
          <div className='year'>
            {props.movieItem.release_date}
          </div>
        </div>
        <div className='genre'>
          {props.movieItem.genres[0]}
        </div>
      </div>
    </div>
  )
};

export default Movie;

Movie.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  release_date: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string)
};
