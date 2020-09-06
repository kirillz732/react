import * as React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const MenuPanel = () => {

  const [sort, setSort] = React.useState('');
  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <div className='found-movies'>
      <div className='filter'>
        <Button>All</Button>
        <Button>Documentary</Button>
        <Button>Comedy</Button>
        <Button>Horror</Button>
        <Button>Crime</Button>
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
            <MenuItem value={'Date'}>Date</MenuItem>
            <MenuItem value={'Name'}>Name</MenuItem>
            <MenuItem value={'Rate'}>Rate</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  )
};

export default MenuPanel
