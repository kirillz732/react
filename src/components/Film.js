import * as React from 'react';

import '../styles/style.scss';
import * as PropTypes from "prop-types";
import {useState} from "react";

const Film = (item) => {
    const [film] = useState(item);
    return (
      <div className='film'>
        <div className='home'>
          <a href='/'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACJklEQVRoge2XMW/TQBTH/89tUqFIiLSDVcTihaViKlKQfMrQIWqJHYmBhfAdEBNrNxgRXwAJ2AApQkAYUNVWFqgDYxcWFmQ7QoCEUFOV9h5Tq7S4tXM+1yDut9m5e+/9bN+9HGAwGAoj9Nxu6LndInNYRQWOPXGLQI8I9DjyxHJReUh3QAYo9sVdMO4cuf9g9nJwm5YhdebTKrB5fa5aH9YfEnAjeQQ/3/5Zuemsrm7ryqlNIG61ajy19QyMxZNH8kp1b/faTH/jx+jdyBM8ej37MshUm5Y1MOg0bK5uraUXDwC0sDNZCb503PM6cucWiP2mI2VlHcB85kmMS7uSgs9XxcW8+XMJhG0xzyzfA1ApxJmw6F3su1fy1KAsEPvNBSKsALDV0/MMM72NfHdJNYKSQOi5XWbZB3BWNfEINTD1VCePLbDfoABUVZMmoBwrswADFPniHgP3x5lXNJn22vQGpZ9vZ75PzT3d3Ekbl/ok41arNj2s906zeACYHp7rf11qpK6xE9/AoNOwpay8wjh7vF4+WNavtv1iY3DcgGMFYr/pMMs3UNvjdfJpT2LxwuvgY9KPiZ9QzgalG2fCwnrYFolfwR8CehqUdmwirCU1vEMCmhuUbmpg6sW+OLSZHAgU1KB0U2XGk6gtDg5LqX3g6P/00ybtXPDXdFRVjEDZTOoKlPUMu4+utfXPvwEjUDZGoGyMQNkYgbIxAmVjBAwGg+H/5jeBZKXgvHTCDQAAAABJRU5ErkJggg=="></img></a>
        </div>
        <div className="poster-small" style={{backgroundImage: `url(${film.poster_path})`}}></div>
        <div className='film-info'>
          <div className='title-id'>
            {film.title}
            <div className='score'>
              {film.vote_count}
            </div>
          </div>
          <div className='tagline'>{film.tagline}</div>
          <div className='date'>{film.release_date} </div>
          <div className='overview'>{film.overview}</div>
        </div>
      </div>
    );
};

export default Film;

Film.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  release_date: PropTypes.string,
  vote_count: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  tagline: PropTypes.string
};
