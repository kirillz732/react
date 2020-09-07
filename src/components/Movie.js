import * as React from 'react';
import * as PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import '../styles/style.scss';
import CreateForm from "./CreateForm/CreateForm";
import DeleteModal from "./DeleteModal/DeleteModal";

const Movie = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [hover, setHover] = React.useState(false);
  const open = Boolean(anchorEl);

  const toggle = () => setHover(true);

  let hoverMenu = {
    display: hover ? 'block' : 'none'
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='contant' onMouseOver={toggle}>
      <div className='menu' style={hoverMenu}>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
        >
          <MenuItem
            onClick={handleClose}>
            <CreateForm open={true} isAddMovie={false} />
            <DeleteModal/>
          </MenuItem>
        </Menu>
      </div>
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
