import * as React from 'react';


const NotFound = () => {
  return (
    <div className='not-found'>
      <div className='not-found--title'>Page Not Found</div>
      <div className='not-found--text'>404</div>
      <div className='not-found--button'>
        <a className='not-found--button-link' href='/'>Go Back To Home</a>
      </div>
    </div>
  )
};

export default NotFound;
