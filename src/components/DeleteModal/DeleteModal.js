import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles'
import {deleteMovie, deleteMovieApi } from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles({
  dialogTitle: {
    color: '#fff',
    textDecoration: 'uppercase'
  },
  dialogContentText: {
    color: '#fff'
  }
});

const DeleteModal = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const movie = useSelector(state => state.getMovie.movie);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = React.useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const handleClose = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const confirmDelete = () => {
    dispatch(deleteMovieApi(movie.id));
    dispatch(deleteMovie(movie.id));
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" className='form-button' onClick={handleClickOpen}>
        DELETE MOVIE
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          classes={{
            root: classes.dialogTitle
          }}
          id="alert-dialog-title"
        >
          DELETE MOVIE
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            classes={{
              root: classes.dialogContentText
            }}
            id="alert-dialog-description">
            Are you sure you want to delete movie?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={confirmDelete} variant="contained" color="secondary">
            Confirm
          </Button>

        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteModal;
