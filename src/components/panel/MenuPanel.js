import * as React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import {useDispatch} from "react-redux";
import {filtereMovie, getMovieApi, sortMovie} from "../../redux/actions";

const MenuPanel = () => {

  const [sort, setSort] = React.useState('');
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setSort(event.target.value);
    dispatch(sortMovie(event.target.value))
  };

  const filter = (filterValue) => {
    filterValue === 'All' ? dispatch(getMovieApi()) : dispatch(filtereMovie(filterValue));
  };

  return (
    <div className='found-movies'>
      <div className='filter'>
        <Button onClick={() => filter('All')}>All</Button>
        <Button onClick={() => filter('Drama')}>Drama</Button>
        <Button onClick={() => filter('Adventure')}>Adventure</Button>
        <Button onClick={() => filter('Action')}>Action</Button>
        <Button onClick={() => filter('Adventure')}>Adventure</Button>
      </div>
      <div className='sort'>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sort}
            onChange={handleChange}
          >
            <MenuItem value={'runtime'}>Runtime</MenuItem>
            <MenuItem value={'vote_average'}>Vote Average</MenuItem>
            <MenuItem value={'budget'}>Budget</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  )
};

export default MenuPanel
