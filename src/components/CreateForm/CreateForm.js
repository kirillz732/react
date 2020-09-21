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
import { makeStyles } from '@material-ui/core/styles'
import {useSelector} from "react-redux";

const useStyles = makeStyles({
  dialogTitle: {
    color: '#fff',
    textDecoration: 'uppercase'
  },
  textField: {
    color: '#fff'
  }
});


const CreateForm = (props) => {
  const classes = useStyles();
  const { isAddMovie } = props;

  const [open, setOpen] = React.useState(false);
  const movie = useSelector(state => state.getMovie.movie);
  const selectMovie = movie ? movie : {};
  const [runtime, setRuntime] = React.useState('');

  const title = props.isAddMovie ? 'Add movie' : 'Edit movie';
  const buttonName = props.isAddMovie ? '+ Add movie' : 'Edit movie';

  const [genre, setGenre] = React.useState('');


  const handleChange = (event) => {
    setGenre(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(props.open);
    if (movie) {
      setGenre(movie.genres[0]);
      setRuntime(movie.runtime)
    }
  };

  const handleClose = () => {
    setOpen(false);
    console.log(movie)
  };

  return (
    <div>
      <Button variant="outlined" className='form-button' onClick={handleClickOpen}>
        {buttonName}
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle
          classes={{
            root: classes.dialogTitle
          }}
          id="form-dialog-title">
          {title}
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TextField
            classes={{
              root: classes.textField
            }}
            margin="dense"
            id="name"
            label="TITLE"
            fullWidth
            defaultValue={selectMovie.title}
            disabled={!isAddMovie}
          />
          <TextField
            className='calendar'
            id="date"
            label="RELEASE DATE"
            type="date"
            defaultValue={selectMovie.release_date}
          />
          <TextField
            margin="dense"
            id="name"
            label="MOVIE URL"
            fullWidth
            defaultValue={selectMovie.poster_path}
          />
          <FormControl className='select-genre'>
            <InputLabel id="select">GENRE</InputLabel>
            <Select
              labelId="select"
              value={genre}
              onChange={handleChange}
            >
              <MenuItem value={'Documentary'}>Documentary</MenuItem>
              <MenuItem value={'Comedy'}>Comedy</MenuItem>
              <MenuItem value={'Horror'}>Horror</MenuItem>
              <MenuItem value={'Crime'}>Crime</MenuItem>
              <MenuItem value={'Action'}>Action</MenuItem>
              <MenuItem value={'Drama'}>Drama</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            id="name"
            label="OVERVIEW"
            fullWidth
            defaultValue={selectMovie.overview}
          />
          <TextField
            margin="dense"
            id="name"
            label="RUNTIME"
            fullWidth
            defaultValue={runtime}
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
