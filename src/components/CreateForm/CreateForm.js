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
import Input from "@material-ui/core/Input";
import {Formik} from "formik";
import * as Yup from 'yup';

const useStyles = makeStyles({
  dialogTitle: {
    color: '#fff',
    textDecoration: 'uppercase'
  },
  textField: {
    color: '#fff'
  }
});

const REQUIRED_ERROR_MESSAGE = 'Required';
const RUNTIME_FORMAT_ERROR_MESSAGE = 'Runtime must be a number > 0';
const GENRES_ERROR_MESSAGE = 'Select at least one genre to proceed';
const VALID_URL_REGEXP = '(http(s?):)|([/|.])*.(?:jpg|gif|png)';
const URL_ERROR_MESSAGE = 'Please enter a valid url or use default: https://lh3.googleusercontent.com/proxy/Hs6w0WSFk_0rKU9cqUeHIotG-ZWUuDo7EQzWhRq-jpgcdUXVyW-4Ocva5oHhd_6PF0EAaLlHGHsTw3zIN_wxdt4h758xURF_mu1HK2E'

const movieValidationSchema = Yup.object({
  title: Yup.string().required(REQUIRED_ERROR_MESSAGE),
  posterPath: Yup.string().required(REQUIRED_ERROR_MESSAGE).matches(VALID_URL_REGEXP, URL_ERROR_MESSAGE),
  genres: Yup.array().typeError(GENRES_ERROR_MESSAGE).min(1, GENRES_ERROR_MESSAGE),
  overview: Yup.string().required(REQUIRED_ERROR_MESSAGE),
  runtime: Yup.number().typeError(RUNTIME_FORMAT_ERROR_MESSAGE).min(0, RUNTIME_FORMAT_ERROR_MESSAGE).required(REQUIRED_ERROR_MESSAGE)
});


const CreateForm = (props) => {
  const classes = useStyles();
  const { isAddMovie } = props;

  const [open, setOpen] = React.useState(false);
  const movieApi = useSelector(state => state.getMovie.movie);
  const selectMovie = movieApi ? movieApi : {};

  const title = props.isAddMovie ? 'Add movie' : 'Edit movie';
  const buttonName = props.isAddMovie ? '+ Add movie' : 'Edit movie';

  const [genre, setGenre] = React.useState('');

  const initialValues = {
    title: selectMovie.title,
    releaseDate: selectMovie.release_date,
    posterPath: selectMovie.poster_path,
    genres: genre,
    overview: selectMovie.overview,
    runtime: selectMovie.runtime
  };

  const onSubmit = (values) => {
    onClose({
      title: values.title,
      release_date: values.releaseDate,
      poster_path: values.posterPath,
      genres: values.genres,
      overview: values.overview,
      runtime: values.runtime
    });
  }

  const handleChange = (event) => {
    setGenre(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(props.open);
    if (movieApi) {
      setGenre(movieApi.genres[0]);
    }
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
          <Formik
            initialValues={ initialValues }
            validationSchema={ movieValidationSchema }
            onSubmit={onSubmit}>
          <Input
            classes={{
              root: classes.textField
            }}
            name="title"
            margin="dense"
            id="title"
            label="TITLE"
            fullWidth
            defaultValue={selectMovie.title}
            disabled={!isAddMovie}
          />
          <TextField
            name="releaseDate"
            className='calendar'
            id="releaseDate"
            label="RELEASE DATE"
            type="date"
            defaultValue={selectMovie.release_date}
          />
          <TextField
            name="posterPath"
            margin="dense"
            id="posterPath"
            label="MOVIE URL"
            fullWidth
            defaultValue={selectMovie.poster_path}
          />
          <FormControl className='select-genre'>
            <InputLabel id="select">GENRE</InputLabel>
            <Select
              name="genres"
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
            name='overview'
            margin="dense"
            id="overview"
            label="OVERVIEW"
            fullWidth
            defaultValue={selectMovie.overview}
          />
          <TextField
            name='runtime'
            margin="dense"
            id="runtime"
            label="RUNTIME"
            fullWidth
            defaultValue={selectMovie.runtime}
          />
          </Formik>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="secondary">
            Reset
          </Button>
          <Button onClick={handleClose} variant="contained" type="submit" color="secondary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateForm;
