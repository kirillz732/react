import React from 'react';

import '../styles/style.scss';

export default function Movie() {
  let data = {
    poster_path: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.depositphotos.com%2Fstock-photos%2F%25D0%25BF%25D1%2580%25D0%25B8%25D0%25BD%25D1%2586.html&psig=AOvVaw18P5kzX-dRGNArxTAxkroa&ust=1598636233290000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIi_8Jj2u-sCFQAAAAAdAAAAABAN',
    title: 'some title',
    release_date: '11-11-2020',
    genres: ['some name']
  };
  return (
    <div className='contant'>
      <div className="poster" style={{backgroundColor: 'red'}}></div>
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
};
