import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import CloseIcon from '@material-ui/icons/Close';
import FormControl from "@material-ui/core/FormControl";


const CreateForm = (props) => {
  const [open, setOpen] = React.useState(false);

  const title = props.isAddMovie ? 'Add movie' : 'Edit movie';
  const buttonName = props.isAddMovie ? '+ Add movie' : 'Edit movie';

  const handleClickOpen = () => {
    setOpen(props.open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" className='form-button' onClick={handleClickOpen}>
        {buttonName}
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          {title}
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="name"
            label="TITLE"
            fullWidth
          />
          <TextField
            className='calendar'
            id="date"
            defaultValue="2017-05-24"
            label="RELEASE DATE"
            type="date"
          />
          <TextField
            margin="dense"
            id="name"
            label="MOVIE URL"
            fullWidth
          />
          <FormControl className='select-genre'>
            <InputLabel id="select">GENRE</InputLabel>
            <Select
              labelId="select"
            >
              <MenuItem>Documentary</MenuItem>
              <MenuItem>Comedy</MenuItem>
              <MenuItem>Horror</MenuItem>
              <MenuItem>Crime</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            id="name"
            label="OVERVIEW"
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="RUNTIME"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="secondary">
            Reset
          </Button>
          <Button onClick={handleClose} variant="contained" color="secondary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateForm;
