import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      position: 'relative'
    }
  },
  addButton: {
    position: 'absolute',
    right: '5%',
    bottom: '5%'
  }
}));

export default function FormDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(props.isDialogOpen);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={classes.root}>
        <Fab
          className={classes.addButton}
          color="primary"
          aria-label="add"
          onClick={handleClickOpen}
        >
          <AddIcon />
        </Fab>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Dodaj wpis</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Wypełnij pola aby dodać nowy wpis
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Anuluj
          </Button>
          <Button onClick={handleClose} color="primary">
            Dodaj
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
